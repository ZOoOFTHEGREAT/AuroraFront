import { Component, OnInit } from '@angular/core';
import { IAddUserAddress } from 'Dtos/User/IAddUserAddress';
import { AccountSettingService } from '../../AccSettingService/accountSetting.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUpdateUserDto } from 'Dtos/User/IUpdateUserDto';
import { UserService } from '../../../authentication/services/user.service';
import { IUpdateUserForm } from 'Dtos/User/IUpdateUserForm';
import { IReadUserByEmailDto } from 'Dtos/User/IReadUserByEmailDto';

@Component({
  selector: 'app-UserAccountInformation',
  templateUrl: './UserAccountInformation.component.html',
  styleUrls: ['./UserAccountInformation.component.css'],
})
export class UserAccountInformationComponent implements OnInit {
  updateUserForm;
  usrToUpdate?: IUpdateUserForm;
  userEmail?: string;
  userObj?: IReadUserByEmailDto;
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
      PhoneNumber: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11),
      ]),
      ZipCode: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
      ]),
    });
  }

  ngOnInit(): void {
    this.userService.userEmail.subscribe((email) => {
      this.userEmail = email;
      this.updateService.getUserByEmail(email).subscribe({
        next: (usr) => {
          this.userObj = usr;
          this.userId = usr.id;
          this.usrToUpdate = {
            UserName: usr.userName,
            Fname: usr.fname,
            Lname: usr.lname,
            Email: usr.email,
            PhoneNumber: usr.phoneNumber,
            ZipCode: usr.zipCode,
          };
          this.updateUserForm.setValue(this.usrToUpdate);
        },
        error: (err) => console.log(err),
      });
    });
  }
  get UserName() {
    return this.updateUserForm.get('UserName');
  }
  get Fname() {
    return this.updateUserForm.get('Fname');
  }
  get Lname() {
    return this.updateUserForm.get('Lname');
  }
  get Email() {
    return this.updateUserForm.get('Email');
  }
  get Password() {
    return this.updateUserForm.get('Password');
  }
  get PhoneNumber() {
    return this.updateUserForm.get('PhoneNumber');
  }
  get ConfirmPassword() {
    return this.updateUserForm.get('ConfirmPassword');
  }
  get ZipCode() {
    return this.updateUserForm.get('ZipCode');
  }
  handleSubmit(e: Event) {
    e.preventDefault();
    if (this.updateUserForm.invalid) return;
    const updatedUser: IUpdateUserDto = {
      Id: this.userId!,
      UserName: this.updateUserForm.value.UserName!,
      Fname: this.updateUserForm.value.Fname!,
      Lname: this.updateUserForm.value.Lname!,
      Email: this.updateUserForm.value.Email!,
      PhoneNumber: this.updateUserForm.value.PhoneNumber!,
      ZipCode: this.updateUserForm.value.ZipCode!,
    };

    this.updateService.updateUserData(updatedUser).subscribe({
      next: (usr) => {
        this.router.navigateByUrl('/accountsetting');
      },
      error: (error) => {
        this.tryAgainError = true;
      },
    });
  }
}
