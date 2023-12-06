import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './authentication/components/login/login.component';
import { AdminmainlayoutComponent } from './landing/components/adminmainlayout/adminmainlayout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AdminmainlayoutComponent },
  {
    path: 'authuntication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
=======
import { LoginformComponent } from './authentication/components/login/login.component';

const routes: Routes = [
  {path: 'login', component:LoginformComponent}
>>>>>>> b7843d48eb933e7257a30ecf4086bf5129e2a423
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
