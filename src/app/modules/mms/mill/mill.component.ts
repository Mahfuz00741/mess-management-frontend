import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mill',
  templateUrl: './mill.component.html',
  styleUrls: ['./mill.component.scss']
})
export class MillComponent implements OnInit {
  displayedColumns: string[] = ['position', 'date', 'morning', 'noon', 'night', 'total-day', 'total-month', 'action'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
