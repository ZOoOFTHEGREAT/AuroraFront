import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountSettingService } from '../../../AccSettingService/accountSetting.service';
import { IAddUserAddress } from 'Dtos/User/IAddUserAddress';

@Component({
  selector: 'app-AddUserAddress',
  templateUrl: './AddUserAddress.component.html',
  styleUrls: ['./AddUserAddress.component.css'],
})
export class AddUserAddressComponent implements OnInit {
  addUserAddress;
  tryAgainError?: string;
  constructor(
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
  handleSubmit($event: SubmitEvent) {
    $event.preventDefault;
    let addAddress: IAddUserAddress = {
      address: this.addUserAddress.value.Address!,
      lineOne: this.addUserAddress.value.LineOne!,
      lineTwo: this.addUserAddress.value.LineTwo!,
      country: this.addUserAddress.value.Country!,
      city: this.addUserAddress.value.City!,
      userId: '5dc1d98e-c713-4463-b261-f7619f6a6372',
    };
    this.addAddress.addUserAddress(addAddress).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err: string) => {
        this.tryAgainError == err;
      },
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
