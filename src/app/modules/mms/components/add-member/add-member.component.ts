import { Component, OnInit } from '@angular/core';
import {AddMemberService} from "../../services/add-member.service";
import {Person} from "../../model/person";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'phone', 'email', 'action'];
  personList: Person = new Person();
  dataSource: any;
  constructor(
    private addMemberService: AddMemberService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.addMemberService.getMemberList().subscribe(res =>{
      this.personList = res;
      this.dataSource = this.personList;
    })
  }

}
