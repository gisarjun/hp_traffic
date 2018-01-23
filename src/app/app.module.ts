import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';
import { AppRoutingModule } from './module/app-routing.module';
import { DashboardRoutingModule } from './module/dashboard-routing.module';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './component/login/login.component';

import { BusyModule } from 'angular2-busy';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    DashboardRoutingModule,
    AppRoutingModule,
    BusyModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
