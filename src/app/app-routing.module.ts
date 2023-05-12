import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { GridComponent } from './grid/grid.component';
import { Grid2Component } from './grid2/grid2.component';
import { Register2Component } from './register2/register2.component';

import { AuthGuard } from './guards/auth.guard';
import { Grid3Component } from './grid3/grid3.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ChartComponent } from './chart/chart.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'register2',
    component:Register2Component,
  },
  {
    path:'forget',
    component:ForgetComponent,
  },
  {
    path:'newpassword',
    component:NewpasswordComponent,
  },
  {
    path:'grid',
    component:GridComponent,canActivate:[AuthGuard]
  },
  {
    path:'grid2',
    component:Grid2Component,
  },
  {
    path:'grid/grid3/:id',
    component:Grid3Component,
  },
  {
    path:'userprofile/:email',
    component:UserprofileComponent,
  },
  {
    path:'chart',
    component:ChartComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
