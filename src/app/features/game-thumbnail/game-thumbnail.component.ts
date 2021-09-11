import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-thumbnail',
  templateUrl: './game-thumbnail.component.html',
  styleUrls: ['./game-thumbnail.component.css']
})
export class GameThumbnailComponent implements OnInit {

  @Input() game:any;
  constructor() { }

  ngOnInit(): void {
  }

}
