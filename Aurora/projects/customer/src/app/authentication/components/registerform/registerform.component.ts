import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  PatternValidator,
  Validators,
} from '@angular/forms';
import { IRegister } from 'Dtos/User/IRegister';
import { Router } from '@angular/router';
import { AddUserService } from '../../services/addUser.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
})
export class RegisterformComponent implements OnInit {
  roleValue?: string;
  userRegister;
  emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$/;

  constructor(
    private fB: FormBuilder,
    private registerService: AddUserService,
    private router: Router
  ) {
    this.userRegister = new FormGroup({
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
    return this.userRegister.get('UserName');
  }
  get Fname() {
    return this.userRegister.get('Fname');
  }
  get Lname() {
    return this.userRegister.get('Lname');
  }
  get Email() {
    return this.userRegister.get('Email');
  }
  get Password() {
    return this.userRegister.get('Password');
  }
  get PhoneNumber() {
    return this.userRegister.get('PhoneNumber');
  }
  get Role() {
    return this.userRegister.get('UserName');
  }
  get ZipCode() {
    return this.userRegister.get('ZipCode');
  }
  get ConfirmPassword() {
    return this.userRegister.get('ConfirmPassword');
  }
  handleSubmit(e: Event) {
    e.preventDefault();
    if (this.userRegister.invalid) return;
    const usr: IRegister = {
      userName: this.userRegister.value.UserName!,
      fname: this.userRegister.value.Fname!,
      lname: this.userRegister.value.Lname!,
      email: this.userRegister.value.Email!,
      passwordHash: this.userRegister.value.Password!,
      phoneNumber: this.userRegister.value.PhoneNumber!,
      role: this.userRegister.value.Role!,
      zipCode: this.userRegister.value.ZipCode!,
    };
    this.registerService.addUser(usr).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: (err: string) => {
        console.error('calling Api Field', err);
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

  onSelected(value: string): void {
    this.roleValue = value;
    console.log(value);
  }
}
// constructor(private fB: FormBuilder) {
//   this.userRegister = fB.group({
//     UserName: [
//       '',
//       Validators.required,
//       Validators.maxLength(20),
//       Validators.minLength(5),
//     ],
//     Fname: [
//       '',
//       Validators.required,
//       Validators.maxLength(10),
//       Validators.minLength(3),
//     ],
//     Lname: [
//       '',
//       Validators.required,
//       Validators.maxLength(10),
//       Validators.minLength(3),
//     ],
//     Email: ['', Validators.required, Validators.email],
//     Password: ['', Validators.required],
//     PhoneNumber: ['', Validators.required],
//     Role: ['', Validators.required],
//     ZipCode: ['', Validators.required],
//   });
// }
