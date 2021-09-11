import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from './../../services/games.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent {
  
  ordering:string = '-added';
  result:any;
  games!: any[];

  constructor(private gamesService: GamesService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private http: HttpClient) { }

  ngOnInit(): void {
    this.route.data.forEach(value => {
      if(value.games) {

        this.games = value.games.results;
        this.result = value.games;

      } 
      else if(value.searchResults) 
      {

        this.games = value.searchResults.results;
        this.result = value.searchResults;

      }
      else if(value.orderedGames)
      {

        this.games = value.orderedGames.results;
        this.result = value.orderedGames;

      }
    })
  }

  onSelectOrdering(ordering:any) {
    if(ordering !== null && ordering !== '' && ordering){
      this.router.navigate([`/games/sort/${ordering}`])
    }
  }

  goNext() {
    this.http.get<any>(this.result?.next).subscribe(data => {
      this.result = data;
      this.games = data.results;
      window.scrollTo(0,0);
    })
  }

  goBack() {
    this.http.get<any>(this.result?.previous).subscribe(data => {
      this.result = data;
      this.games = data.results;
      window.scrollTo(0,0);
    })
  }

  goTop() {
    window.scrollTo(0 ,0);
  }
}
