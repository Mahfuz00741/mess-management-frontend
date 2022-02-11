import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bazar',
  templateUrl: './bazar.component.html',
  styleUrls: ['./bazar.component.scss']
})
export class BazarComponent implements OnInit {
  displayedColumns: string[] = ['position', 'date', 'items', 'total-bazar', 'action'];

  constructor() { }

  ngOnInit(): void {
  }

}
