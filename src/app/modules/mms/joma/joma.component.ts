import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joma',
  templateUrl: './joma.component.html',
  styleUrls: ['./joma.component.scss']
})
export class JomaComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'taka', 'date', 'action'];

  constructor() { }

  ngOnInit(): void {
  }

}
