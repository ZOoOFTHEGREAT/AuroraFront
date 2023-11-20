import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent {
  userRegister: FormGroup;
  roleValue?: string;
  constructor(public fB: FormBuilder) {
    this.userRegister = fB.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // property readOnly
  get Email() {
    return this.userRegister.get('Email');
  }
  get Password() {
    return this.userRegister.get('Password');
  }
}
