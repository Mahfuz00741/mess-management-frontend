import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'joma', 'total-mill', 'total-cost', 'tr', 'dr'];

  constructor() { }

  ngOnInit(): void {
  }

}
