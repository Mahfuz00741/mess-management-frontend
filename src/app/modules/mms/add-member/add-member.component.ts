import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'phone', 'email', 'action'];

  constructor() { }

  ngOnInit(): void {
  }

}
