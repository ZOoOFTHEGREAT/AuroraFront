import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AccountSettingService } from '../../../AccSettingService/accountSetting.service';
import { Router } from '@angular/router';
import { UserService } from 'projects/customer/src/app/authentication/services/user.service';
import { IUpdateUserDto } from 'Dtos/User/IUpdateUserDto';
import { IUpdateUserForm } from 'Dtos/User/IUpdateUserForm';
import { IUpdatePassword } from 'Dtos/User/IUpdatePassword';

@Component({
  selector: 'app-UpdatePassword',
  templateUrl: './UpdatePassword.component.html',
  styleUrls: ['./UpdatePassword.component.css'],
})
export class UpdatePasswordComponent implements OnInit {
  updateUserForm;
  usrToUpdate?: IUpdatePassword;
  userEmail?: string;
  userId?: string;
  tryAgainError?: boolean = false;
  emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$/;

  constructor(
    private fB: FormBuilder,
    private updateService: AccountSettingService,
    private router: Router,
    private userService: UserService
  ) {
    this.updateUserForm = new FormGroup({
      Password: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(8),
        Validators.pattern(this.passwordRegex),
      ]),
      OldPassword: new FormControl<string>('', [Validators.required]),
      ConfirmPassword: new FormControl<string>('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.userService.userEmail.subscribe((email) => (this.userEmail = email));
    this.updateService.getUserByEmail(this.userEmail!).subscribe({
      next: (usr) => (this.userId = usr.id),
      error: (err) => console.log(err),
    });
  }

  get Password() {
    return this.updateUserForm.get('Password');
  }
  get OldPassword() {
    return this.updateUserForm.get('OldPassword');
  }
  get ConfirmPassword() {
    return this.updateUserForm.get('ConfirmPassword');
  }
  handleSubmit(e: Event) {
    e.preventDefault();
    if (this.updateUserForm.invalid) return;
    const updatedUser: IUpdatePassword = {
      Id: this.userId!,
      Password: this.updateUserForm.value.Password!,
      OldPassword: this.updateUserForm.value.OldPassword!,
    };
    this.updateService.updateUserPw(updatedUser).subscribe({
      next: (usr) => {
        this.router.navigateByUrl('/accountsetting/userinfo');
      },
      error: (error) => {
        this.tryAgainError = true;
      },
    });
  }
}
