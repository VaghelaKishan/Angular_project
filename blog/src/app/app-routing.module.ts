import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutComponent } from './about/about.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    component:ChildComponent,
    path:'child/:id',
    
  },
  // {
  //   component:NoPageComponent,
  //   path:'**',
    
  // },
  {
    path:'admin',loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },
  {
    component:AboutComponent,
    path:'about',
    children:[
      {path:'company',component:AboutCompanyComponent},
      {path:'me',component:AboutMeComponent}
    ]
    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
