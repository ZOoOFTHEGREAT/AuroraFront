import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../users/services/user.service';
import { Router } from '@angular/router';
import { ILogin } from 'Dtos/User/ILogin';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  roleValue?: string;
  isExist?: string;
  userEmail?: string;
  adminLogin: any;
  constructor(
    private adminServ: AuthService,
    public fB: FormBuilder,
    private userServices: UserService,
    private router: Router
  ) {
    this.adminLogin = new FormGroup({
      Email: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
    });
  }

  get Email() {
    return this.adminLogin.get('Email');
  }
  get Password() {
    return this.adminLogin.get('Password');
  }

  HandleSumbit(e: Event) {
    e.preventDefault;
    if (this.adminLogin.invalid) return;
    let adminLogin: ILogin = {
      email: this.adminLogin.value.Email!,
      password: this.adminLogin.value.Password!,
    };
    this.adminServ.userEmail.next(adminLogin.email);
    this.adminServ.login(adminLogin).subscribe({
      next: () => this.router.navigateByUrl('/'),
      complete: () => this.adminServ.isLoggedIn.next(true),
      error: (err: string) => {
        console.log(err);
        this.isExist = err;
      },
    });
  }
}
