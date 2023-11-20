import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  PatternValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
})
export class RegisterformComponent implements OnInit {
  userRegister: FormGroup;
  roleValue?: string;

  constructor(private fB: FormBuilder) {
    this.userRegister = fB.group({
      UserName: [
        '',
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(5),
      ],
      Fname: [
        '',
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ],
      Lname: [
        '',
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ],
      Email: ['', Validators.required, Validators.email],
      Password: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Role: ['', Validators.required],
      ZipCode: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
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

  onSelected(value: string): void {
    this.roleValue = value;
    console.log(value);
  }
}
