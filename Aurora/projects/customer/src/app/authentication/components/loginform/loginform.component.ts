import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent {
  userLogin;
  roleValue?: string;
  constructor(public fB: FormBuilder) {
    this.userLogin = new FormGroup({
      Email: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // property readOnly
  get Email() {
    return this.userLogin.get('Email');
  }
  get Password() {
    return this.userLogin.get('Password');
  }
}
