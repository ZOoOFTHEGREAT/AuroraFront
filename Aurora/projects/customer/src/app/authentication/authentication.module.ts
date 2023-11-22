import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from './components/loginform/loginform.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginformComponent, RegisterformComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [RegisterformComponent, LoginformComponent],
})
export class AuthenticationModule {}
