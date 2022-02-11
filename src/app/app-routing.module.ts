import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./modules/mms/index/index.component";
import {BazarComponent} from "./modules/mms/bazar/bazar.component";
import {MillComponent} from "./modules/mms/mill/mill.component";

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "bazar", component: BazarComponent},
  {path: "mill", component: MillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
