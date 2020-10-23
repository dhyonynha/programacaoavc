import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  public headerText = "Github link";
  public url = "https://github.com/dhyonynha/web/";

  constructor() { }

  ngOnInit(): void {
  }

}
