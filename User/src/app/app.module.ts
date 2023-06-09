import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetComponent,
    ResetpasswordComponent,
    NewpasswordComponent,
    
  
   
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgModule,

 
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
