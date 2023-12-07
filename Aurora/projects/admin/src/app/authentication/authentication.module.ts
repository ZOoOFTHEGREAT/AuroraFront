import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './Service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthunticationRoutingModule } from './authuntication-routing.module';
import { RegisterComponent } from './components/Register/Register.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AddproductComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthunticationRoutingModule],
  exports: [LoginComponent, RegisterComponent, AddproductComponent],
})
export class AuthenticationModule {}
// [CommonModule, ReactiveFormsModule, AuthunticationRoutingModule]
