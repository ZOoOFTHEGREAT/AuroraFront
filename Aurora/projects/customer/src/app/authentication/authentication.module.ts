import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from './components/loginform/loginform.component';
import { RegisterformComponent } from './components/registerform/registerform.component';



@NgModule({
  declarations: [
    LoginformComponent,
    RegisterformComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
