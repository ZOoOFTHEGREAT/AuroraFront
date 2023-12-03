import { Component, OnInit } from '@angular/core';
import { AccountSettingService } from '../../AccSettingService/accountSetting.service';
import { Router } from '@angular/router';
import { UserService } from '../../../authentication/services/user.service';
import { IReadUserAddresByUserIdDto } from 'Dtos/User/IReadUserAddresByUserIdDto';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-useraddresses',
  templateUrl: './useraddresses.component.html',
  styleUrls: ['./useraddresses.component.css'],
})
export class UseraddressesComponent implements OnInit {
  userLoggedEmail?: string;
  userId: string = '';
  userAddress?: IReadUserAddresByUserIdDto[];
  constructor(
    private addressService: AccountSettingService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.userEmail.subscribe((email) => {
      this.userLoggedEmail = email;

      this.addressService
        .getUserByEmail(this.userLoggedEmail!)
        .pipe(
          switchMap((usr) => this.addressService.getAddressByUserId(usr.id))
        )
        .subscribe({
          next: (userAddresDetails) => {
            this.userAddress = userAddresDetails;
          },
          error: (err) => console.log(err),
        });
    });
  }
  handleDelete(addressId: number) {
    this.addressService.deleteUserAddress(addressId).subscribe({
      next: () => {
        this.router.navigateByUrl('/accountsetting');
      },
      error: (err) => console.error(err),
    });
  }
}
