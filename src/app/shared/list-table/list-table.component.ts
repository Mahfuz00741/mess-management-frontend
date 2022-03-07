import {Component, Inject, OnInit} from '@angular/core';
import {data} from "autoprefixer";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {AddMemberComponent} from "../../modules/mms/components/add-member/add-member.component";
import {BazarComponent} from "../../modules/mms/components/bazar/bazar.component";

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'phone', 'email', 'action'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataSource: any,
    private dialogRef: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openAddMember(data: any) {
    this.dialogRef.open(AddMemberComponent, {
      disableClose: true,
      data: data,
    });
  }

}
