import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { AuthorComponentComponent } from './components/author-component/author-component.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './components/login/login.service';
import { ReimburseComponent } from './components/reimburse/reimburse.component';
import { ReimburseService } from './components/reimburse/reimburse.service';
import { CookieService } from 'ngx-cookie-service';
import { Routes, RouterModule, Router } from '@angular/router';
 import { AppRoutingModule } from './app-routing.module';
import { ViewComponent } from './components/view/view.component';
import { AuthHttp, AuthConfig, AuthModule } from 'angular2-jwt';
import { ViewService } from './components/view/view.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AuthorComponentComponent,
    LoginComponent,
    ReimburseComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatInputModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
   AppRoutingModule,
   AuthModule,
   MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [LoginService,
  ReimburseService,
  ViewService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
