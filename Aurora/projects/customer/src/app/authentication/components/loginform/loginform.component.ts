import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ILogin } from 'Dtos/User/ILogin';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent {
  userLogin;
  roleValue?: string;
  isExist?: string;
  constructor(
    public fB: FormBuilder,
    private userServices: UserService,
    private router: Router
  ) {
    this.userLogin = new FormGroup({
      Email: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
    });
  }

  // property readOnly
  get Email() {
    return this.userLogin.get('Email');
  }
  get Password() {
    return this.userLogin.get('Password');
  }

  HandleSumbit(e: Event) {
    e.preventDefault;
    if (this.userLogin.invalid) return;
    let usrLogin: ILogin = {
      email: this.userLogin.value.Email!,
      password: this.userLogin.value.Password!,
    };
    this.userServices.login(usrLogin).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err: string) => {
        console.log(err);
        this.isExist = err;
      },
    });
  }
}
