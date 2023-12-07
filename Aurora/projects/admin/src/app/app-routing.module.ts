import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { AdminmainlayoutComponent } from './landing/components/adminmainlayout/adminmainlayout.component';
import { AddImageComponent } from './Images/components/add-image/add-image.component';
import { DashboardComponent } from './landing/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  {
    path: 'addimg',
    component: AddImageComponent,
  },
  {
    path: 'authuntication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
