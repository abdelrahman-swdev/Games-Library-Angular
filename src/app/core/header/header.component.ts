import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  search(searchForm:any) {
    let query = searchForm.controls.searchQuery.value;
    if(query !== null && query !== '' && query){
      this.route.navigate([`/games/search/${searchForm.controls.searchQuery.value}`]);
    }
  }

}
