import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from './components/loginform/loginform.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthunticationRoutingModule } from './authuntication-routing.module';

@NgModule({
  declarations: [LoginformComponent, RegisterformComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthunticationRoutingModule],
  exports: [RegisterformComponent, LoginformComponent],
})
export class AuthenticationModule {}
