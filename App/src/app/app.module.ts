import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './com/login/login.component';
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
import { FormsModule } from '@angular/forms';
import { ToggleelementComponent } from './toggleelement/toggleelement.component';
import { ChildComponent } from './parenttochild/child/child.component';
import { ParenttochildComponent } from './parenttochild/parenttochild.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { Child1Component } from './childtoparent/child1/child1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialuiComponent } from './materialui/materialui.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { RedElDirective } from './red-el.directive';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { Api1Component } from './api1/api1.component';
import { PostapiComponent } from './postapi/postapi.component';
import { Model1Component } from './model1/model1.component';
import { LazyloadingComponent } from './admin/lazyloading/lazyloading.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    FunctionCallComponent,
    Event1Component,
    CountComponent,
    IfelseComponent,
    SwichcaseComponent,
    ForloopComponent,
    NestedloopComponent,
    StylebindingComponent,
    FormComponent,
    ToggleelementComponent,
    ChildComponent,
    ParenttochildComponent,
    ChildtoparentComponent,
    Child1Component,
    MaterialuiComponent,
    TwowaybindingComponent,
    TemplatereferencevariableComponent,
    TemplatedrivenformComponent,
    ReactiveformComponent,
    DirectivesComponent,
    RedElDirective,
    HeaderComponent,
    Api1Component,
    PostapiComponent,
    Model1Component,
    LazyloadingComponent,

    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
