import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister } from 'Dtos/User/IRegister';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {
  roleValue?: string;
  adminRegister;
  tryAgainError?: boolean = false;
  emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$/;

  constructor(
    private fB: FormBuilder,
    private registerService: AuthService,
    private router: Router
  ) {
    this.adminRegister = new FormGroup({
      UserName: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ]),
      Fname: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
      Lname: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
      Email: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(this.emailRegex),
      ]),
      Password: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(8),
        Validators.pattern(this.passwordRegex),
      ]),
      PhoneNumber: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11),
      ]),
      Role: new FormControl<string>('', [Validators.required]),
      ZipCode: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
      ]),
      ConfirmPassword: new FormControl<string>('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  // property readOnly
  get UserName() {
    return this.adminRegister.get('UserName');
  }
  get Fname() {
    return this.adminRegister.get('Fname');
  }
  get Lname() {
    return this.adminRegister.get('Lname');
  }
  get Email() {
    return this.adminRegister.get('Email');
  }
  get Password() {
    return this.adminRegister.get('Password');
  }
  get PhoneNumber() {
    return this.adminRegister.get('PhoneNumber');
  }
  get Role() {
    return this.adminRegister.get('UserName');
  }
  get ZipCode() {
    return this.adminRegister.get('ZipCode');
  }
  get ConfirmPassword() {
    return this.adminRegister.get('ConfirmPassword');
  }
  handleSubmit(e: Event) {
    e.preventDefault();
    if (this.adminRegister.invalid) return;
    const usr: IRegister = {
      userName: this.adminRegister.value.UserName!,
      fname: this.adminRegister.value.Fname!,
      lname: this.adminRegister.value.Lname!,
      email: this.adminRegister.value.Email!,
      passwordHash: this.adminRegister.value.Password!,
      phoneNumber: this.adminRegister.value.PhoneNumber!,
      role: 'admin',
      zipCode: this.adminRegister.value.ZipCode!,
    };
    this.registerService.addUser(usr).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: () => {
        this.tryAgainError = true;
      },
    });
    // this.registerService.addUser(usr).subscribe({
    //   next: () => {
    //     //redirect to home
    //     this.router.navigateByUrl('/');
    //   },
    //   error: (error) => {
    //     console.error('Calling API failed', error);
    //   },
    // });
  }
}
