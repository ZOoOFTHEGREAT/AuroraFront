import { NgModule } from '@angular/core';
import { LoginformComponent } from './components/loginform/loginform.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginformComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'register', component: RegisterformComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthunticationRoutingModule {}
