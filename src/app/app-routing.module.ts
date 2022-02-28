import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./modules/mms/index/index.component";
import {BazarComponent} from "./modules/mms/bazar/bazar.component";
import {MillComponent} from "./modules/mms/mill/mill.component";
import {AddMemberComponent} from "./modules/mms/add-member/add-member.component";
import {JomaComponent} from "./modules/mms/joma/joma.component";

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "bazar", component: BazarComponent},
  {path: "mill", component: MillComponent},
  {path: "add-member", component: AddMemberComponent},
  {path: "joma", component: JomaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
