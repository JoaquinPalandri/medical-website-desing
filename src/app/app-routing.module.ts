import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CentralPageComponent} from "./modules/user/pages/central-page/central-page.component";
import {NoPageFoundComponent} from "./modules/user/pages/no-page-found/no-page-found.component";

const routes: Routes = [
  {
    component:CentralPageComponent,
    path:""
  },
  {
    component:NoPageFoundComponent,
    path:"**"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
