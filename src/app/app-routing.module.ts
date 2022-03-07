import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./modules/mms/components/index/index.component";
import {BazarComponent} from "./modules/mms/components/bazar/bazar.component";
import {MealComponent} from "./modules/mms/components/meal/meal.component";
import {AddMemberComponent} from "./modules/mms/components/add-member/add-member.component";
import {JomaComponent} from "./modules/mms/components/joma/joma.component";

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "bazar", component: BazarComponent},
  {path: "meal", component: MealComponent},
  {path: "add-member", component: AddMemberComponent},
  {path: "add-member/:id", component: AddMemberComponent},
  {path: "joma", component: JomaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
