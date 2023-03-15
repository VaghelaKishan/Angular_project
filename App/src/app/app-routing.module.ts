import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InterpolationComponent} from './interpolation/interpolation.component'
import {LoginComponent} from './com/login/login.component';
import { SignInComponent } from './user-auth/sign-in/sign-in.component';
import { SignUpComponent } from './user-auth/sign-up/sign-up.component';
import { FunctionCallComponent } from './function-call/function-call.component';
import { Event1Component } from './event1/event1.component';
import { CountComponent } from './count/count.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SwichcaseComponent } from './swichcase/swichcase.component';
import { ForloopComponent } from './forloop/forloop.component';
import { NestedloopComponent } from './nestedloop/nestedloop.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { FormComponent } from './form/form.component';
import { ToggleelementComponent } from './toggleelement/toggleelement.component';

import { ParenttochildComponent } from './parenttochild/parenttochild.component';

import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { Child1Component } from './childtoparent/child1/child1.component';
import { MaterialuiComponent } from './materialui/materialui.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DirectivesComponent } from './directives/directives.component';
import { HeaderComponent } from './header/header.component';
import { Api1Component } from './api1/api1.component';
import { PostapiComponent } from './postapi/postapi.component';
import { Model1Component } from './model1/model1.component';
import { LazyloadingComponent } from './admin/lazyloading/lazyloading.component';






const routes: Routes = [
  {
    path:"interpolation",
    component:InterpolationComponent,
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"sign-up",
    component:SignUpComponent,
    children:[
      {path:'sign-in',component:SignInComponent},
    ]
  },
  {
    path:"Function-Call",
    component:FunctionCallComponent,
  },
  {
    path:"event1",
    component:Event1Component,
  },
  {
    path:"count",
    component:CountComponent,
  },
  {
    path:"ifelse",
    component:IfelseComponent,
  },
  {
    path:"swichcase",
    component:SwichcaseComponent,
  },
  {
    path:"forloop",
    component:ForloopComponent,
  },
  {
    path:"nestedloop",
    component:NestedloopComponent,
  },
  {
    path:"stylebinding",
    component:StylebindingComponent,
  },
  {
    path:"form",
    component:FormComponent,
  },
  {
    path:"toggleelement",
    component:ToggleelementComponent,
  },
  {
    component:ParenttochildComponent,
    path:'parenttochild',
    // children:[
    //   {path:'child',component:ChildComponent},
    // ]
  },
  {
    component:ChildtoparentComponent,
    path:'childtoparent',
    children:[
      {path:'child1',component:Child1Component},
    ]
  },
  {
    path:"materialui",
    component:MaterialuiComponent,
  },
  {
    path:"twowaybinding",
    component:TwowaybindingComponent,
  },
  {
    path:"templatereferencevariable",
    component:TemplatereferencevariableComponent,
  },
  {
    path:"templatedrivenform",
    component:TemplatedrivenformComponent,
  },
  {
    path:"reactiveform",
    component:ReactiveformComponent,
  },
  {
    path:"directives",
    component:DirectivesComponent,
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'api1',
    component:Api1Component,
  },
  {
    path:'postapi',
    component:PostapiComponent,
  },
  {
    path:'model1',
    component:Model1Component,
  },
  {
    path:'admin',loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule),
  
  },
  {
    path:'lazyloading',
    component:LazyloadingComponent,
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
