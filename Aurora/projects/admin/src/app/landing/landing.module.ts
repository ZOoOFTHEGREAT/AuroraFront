import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent, AdminnavbarComponent],
  imports: [CommonModule, AuthenticationModule, RouterModule],
  exports: [DashboardComponent, AdminnavbarComponent],
})
export class LandingModule {}
