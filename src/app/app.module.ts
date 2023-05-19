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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipePipe } from './pipe.pipe';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './grid/grid.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {MatIconModule} from '@angular/material/icon';



import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Grid2Component } from './grid2/grid2.component';
import { Register2Component } from './register2/register2.component';
import { NgToastModule } from 'ng-angular-popup'
import { TokenInterceptor } from './interceptors/token.interceptor';
import { Grid3Component } from './grid3/grid3.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {NgChartsModule} from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    NewpasswordComponent,
    ChartComponent,
    PipePipe,
    GridComponent,
    Grid2Component,
    Register2Component,
    Grid3Component,
    UserprofileComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule,
    Ng2TelInputModule,
    BrowserAnimationsModule,
    HttpClientModule,MatIconModule,MatToolbarModule,MatButtonModule,MatDialogModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule,MatNativeDateModule,MatRadioModule,MatSelectModule,MatTableModule,
    MatPaginatorModule,MatSortModule,MatSnackBarModule,
    NgToastModule,NgxPaginationModule,NgChartsModule,MatListModule,
    FlexLayoutModule,FilterPipeModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
