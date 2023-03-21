import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    NewpasswordComponent,
    PipePipe,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    Ng2TelInputModule,
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
