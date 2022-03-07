import {Component, Inject, OnInit} from '@angular/core';
import {AddMemberService} from "../../services/add-member.service";
import {Person} from "../../model/person";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ListTableComponent} from "../../../../shared/list-table/list-table.component";
import {data} from "autoprefixer";
import {BazarComponent} from "../bazar/bazar.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'phone', 'email', 'action'];
  personList: Person = new Person();
  dataSource: any;
  formGroup: any = FormGroup;
  message: string;
  dialogRef: MatDialogRef<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public memData: any,
    private addMemberService: AddMemberService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
    this.initializeFormValue();
    this.initializeFormValueAfterModalCall();
  }


  private loadData() {
    this.dataSource = [];
    this.addMemberService.getMemberList().subscribe(res => {
      this.personList = res;

      this.dataSource = this.personList;
    })
  }

  private initializeFormValue(): any {
    this.formGroup = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        age: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
      }
    )
  }

  private initializeFormValueAfterModalCall(): any {

      this.formGroup.patchValue({
        name: this.memData.name,
        age: this.memData.age,
        email: this.memData.email,
        phone: this.memData.phone,
      })

  }

  submit(): any {

    // if(this.formGroup.value.id!=null || this.formGroup.value.id!=''){
    //   this.update();
    if (this.memData.id) {
      this.update();
    } else {
      console.log('save')
      this.addMemberService.saveMember(this.formGroup.value).subscribe(
        res => {
          this.loadData();
          this.initializeFormValue();
        this.toastr.success("Thank you for Add Member", 'Save Success!', {
          timeOut: 4000,
        })}
      )
    }
  }

  update() {
    console.log('update')
    this.addMemberService.updateMember(this.formGroup.value, this.memData.id).subscribe(
      res => {
        this.loadData();
        this.initializeFormValue();
        this.toastr.success("", 'Update Success!', {
          timeOut: 4500,
        })}
    )
  }

  /*edit(data: any): any {
    this.formGroup = this.formBuilder.group(
      {
        name: [this.memData.name, [Validators.required]],
        age: [data.age, [Validators.required]],
        email: [data.email, [Validators.required, Validators.email]],
        phone: [data.phone, [Validators.required]],
      }
    )
    //this.router.navigate(['/add-member/'+data.id])
  }*/

  delete(data: number): any {
    this.addMemberService.deleteMember(data).subscribe(
      res => {
        this.loadData();
        this.message = "Delete Success"
      }
    )
  }

  clear() {
    this.initializeFormValue();
    this.message = "";
  }

  openMemberList() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    this.dialog.open(ListTableComponent, {
      width: "75%",
      data: this.dataSource,
      disableClose: true,
    });
    this.dialog.afterAllClosed.subscribe(res =>{
      this.loadData();
    })
  }
}
