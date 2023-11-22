import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { LandingModule } from './landing/landing.module';
import { DashboardComponent } from './landing/components/dashboard/dashboard.component';
import { ProductsModule } from './products/products.module';

@NgModule({
    declarations: [
        AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
  AuthenticationModule,
    LandingModule,
    ProductsModule,
  UsersModule
],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
