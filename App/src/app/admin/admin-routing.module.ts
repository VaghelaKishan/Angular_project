import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../admin/login/login.component';
import { ListComponent } from '../admin/list/list.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';
const routes: Routes = [
  {path:'admin/login',component:LoginComponent},
  {path:'list',component:ListComponent},
  {path:'lazyloading',component:LazyloadingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
