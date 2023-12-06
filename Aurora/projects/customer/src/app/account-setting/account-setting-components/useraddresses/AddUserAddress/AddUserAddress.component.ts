import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountSettingService } from '../../../AccSettingService/accountSetting.service';
import { IAddUserAddress } from 'Dtos/User/IAddUserAddress';
import { UserService } from 'projects/customer/src/app/authentication/services/user.service';
import { IReadUserByEmailDto } from 'Dtos/User/IReadUserByEmailDto';

@Component({
  selector: 'app-AddUserAddress',
  templateUrl: './AddUserAddress.component.html',
  styleUrls: ['./AddUserAddress.component.css'],
})
export class AddUserAddressComponent implements OnInit {
  addUserAddress;
  isError?: boolean = false;
  userEmail?: string;
  usr?: IReadUserByEmailDto;
  constructor(
    private userService: UserService,
    private router: Router,
    private addAddress: AccountSettingService
  ) {
    this.addUserAddress = new FormGroup({
      Address: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3),
      ]),
      LineOne: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3),
      ]),
      LineTwo: new FormControl<string>('', [
        Validators.maxLength(30),
        Validators.minLength(3),
      ]),
      Country: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
      City: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
    });
  }
  ngOnInit(): void {
    this.userService.userEmail.subscribe((email) => (this.userEmail = email));
    this.addAddress.getUserByEmail(this.userEmail!).subscribe({
      next: (usr) => (this.usr = usr),
      error: (err) => console.error(err),
    });
  }
  handleSubmit($event: SubmitEvent) {
    $event.preventDefault;
    let addAddress: IAddUserAddress = {
      address: this.addUserAddress.value.Address!,
      lineOne: this.addUserAddress.value.LineOne!,
      lineTwo: this.addUserAddress.value.LineTwo!,
      country: this.addUserAddress.value.Country!,
      city: this.addUserAddress.value.City!,
      userId: this.usr?.id!,
    };
    this.addAddress.addUserAddress(addAddress).subscribe({
      next: () => this.router.navigateByUrl('/accountsetting/useraddress'),
      error: (err: boolean) => {
        this.isError = true;
      },
    });
  }

  get Address() {
    return this.addUserAddress.get('Address');
  }
  get LineOne() {
    return this.addUserAddress.get('LineOne');
  }
  get LineTwo() {
    return this.addUserAddress.get('LineTwo');
  }
  get City() {
    return this.addUserAddress.get('City');
  }
  get Country() {
    return this.addUserAddress.get('Country');
  }
}
