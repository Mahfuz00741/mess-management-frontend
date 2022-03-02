import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  displayedColumns: string[] = ['position', 'date', 'morning', 'noon', 'night', 'total-day', 'total-month', 'action'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
