import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from './../../services/games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  game:any;

  constructor(private gameService: GamesService,
     private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.forEach(value => {
      this.game = value.game;
      console.log(this.game);
    })
  }



}
