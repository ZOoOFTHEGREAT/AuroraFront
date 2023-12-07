import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { RouterModule } from '@angular/router';
import { AdminmainlayoutComponent } from './components/adminmainlayout/adminmainlayout.component';
import { AdminfooterComponent } from './components/adminfooter/adminfooter.component';
import { AddImageComponent } from '../Images/components/add-image/add-image.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminnavbarComponent,
    AdminmainlayoutComponent,
    AdminfooterComponent,
    AddImageComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent,
    AdminnavbarComponent,
    AdminmainlayoutComponent,
    AdminfooterComponent,
    AddImageComponent,
    DashboardComponent,
  ],
})
export class LandingModule {}
