import { Component, OnInit } from '@angular/core';
import { UserService } from 'projects/customer/src/app/authentication/services/user.service';
import { AccountSettingService } from '../../../AccSettingService/accountSetting.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IReadUserAddresByUserIdDto } from 'Dtos/User/IReadUserAddresByUserIdDto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { IUpdateUserAddressDto } from 'Dtos/User/IUpdateUserAddressDto';
import { IUpdateUserAddressForm } from 'Dtos/User/IUpdateUserAddressForm';

@Component({
  selector: 'app-EditUserAddress',
  templateUrl: './EditUserAddress.component.html',
  styleUrls: ['./EditUserAddress.component.css'],
})
export class EditUserAddressComponent implements OnInit {
  userLoggedEmail?: string;
  userId?: string;
  accountNumber?: string;
  provider?: string;
  userAddressDetails?: IReadUserAddresByUserIdDto[];
  addUserAddress;
  isError?: boolean;
  addressId?: number;
  constructor(
    private userService: UserService,
    private router: Router,
    private addressService: AccountSettingService,
    private activatedRoute: ActivatedRoute
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
    this.userService.userEmail.subscribe(
      (email) => (this.userLoggedEmail = email)
    );

    this.addressService
      .getUserByEmail(this.userLoggedEmail!)
      .pipe(
        switchMap((usr) => {
          this.userId = usr.id;
          return this.addressService.getAddressByUserId(usr.id);
        })
      )
      .subscribe({
        next: (usrAddress) => {
          this.userAddressDetails = usrAddress;
          this.activatedRoute.paramMap.subscribe((map) => {
            this.addressId = +map.get('id')!;
          });
          let getAddress = usrAddress.find(
            (address) => address.id == this.addressId
          );
          let addressDetail: IUpdateUserAddressForm = {
            Address: getAddress?.address!,
            LineOne: getAddress?.lineOne!,
            LineTwo: getAddress?.lineTwo!,
            Country: getAddress?.country!,
            City: getAddress?.city!,
          };
          this.addUserAddress.setValue(addressDetail);
        },
        error: (err) =>
          console.error(`there's error in getting user address details ${err}`),
      });
  }
  handleSubmit($event: SubmitEvent) {
    $event.preventDefault;
    let editAddress: IUpdateUserAddressDto = {
      Address: this.addUserAddress.value.Address!,
      LineOne: this.addUserAddress.value.LineOne!,
      LineTwo: this.addUserAddress.value.LineTwo!,
      Country: this.addUserAddress.value.Country!,
      City: this.addUserAddress.value.City!,
      Id: this.addressId!,
    };
    this.addressService.updateUserAddress(editAddress).subscribe({
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
