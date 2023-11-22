import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { CartModule } from './cart/cart.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from './landing/components/main-layout/main-layout.component';
import { AccountSettingModule } from './account-setting/account-setting.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    SidebarModule,
    CartModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    SidebarComponent,
    ReactiveFormsModule,
    AccountSettingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
