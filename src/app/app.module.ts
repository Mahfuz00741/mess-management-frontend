import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './modules/mms/components/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import { BazarComponent } from './modules/mms/components/bazar/bazar.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import { MealComponent } from './modules/mms/components/meal/meal.component';
import {MatButtonModule} from "@angular/material/button";
import { AddMemberComponent } from './modules/mms/components/add-member/add-member.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import { JomaComponent } from './modules/mms/components/joma/joma.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListTableComponent } from './shared/list-table/list-table.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import {ToastrModule} from "ngx-toastr";

function MdDialogRef() {

}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BazarComponent,
    MealComponent,
    AddMemberComponent,
    JomaComponent,
    ListTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    CommonModule,
    ToastrModule.forRoot(),
  ],
  providers: [MatDatepickerModule,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MdDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
