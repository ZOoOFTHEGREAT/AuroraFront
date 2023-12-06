import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AccountSettingService } from '../../AccSettingService/accountSetting.service';
import { UserService } from '../../../authentication/services/user.service';

import { switchMap } from 'rxjs/operators';
import { IReadUserPaymentByUserIdDto } from 'Dtos/User/IReadUserPaymentByUserIdDto';

@Component({
  selector: 'app-userpayments',
  templateUrl: './userpayments.component.html',
  styleUrls: ['./userpayments.component.css'],
})
export class UserpaymentsComponent implements OnInit {
  userLoggedEmail?: string;
  userId: string = '';
  userPaymentDetails?: IReadUserPaymentByUserIdDto[];
  propertyName: any;
  constructor(
    private userPayment: AccountSettingService,
    private user: UserService
  ) {}
  handleDelete(id: number) {
    this.userPayment.deletePayment(id).subscribe();
  }
  ngOnInit(): void {
    this.user.userEmail.subscribe((email) => {
      this.userLoggedEmail = email;
      this.userPayment
        .getUserByEmail(this.userLoggedEmail!)
        .pipe(switchMap((usr) => this.userPayment.getPaymentByUserId(usr.id)))
        .subscribe({
          next: (userPaymentDetails) => {
            this.userPaymentDetails = userPaymentDetails;
          },
          error: (err) => console.log(err),
        });
    });
  }
}

// ngOnInit(): void {
//   this.user.userEmail.subscribe((email) => {
//     this.userLoggedEmail = email;
//   });
//   this.userPayment.getUserByEmail(this.userLoggedEmail!).subscribe({
//     next: (usr) => {
//       this.userPayment.getPaymentByUserId(usr.id).subscribe({
//         next: (e) => {
//           this.userPaymentDetails = e;
//           console.log('------------------------');
//           console.log(this.userPaymentDetails);
//           console.log('------------------------');
//         },
//         error: (err) => console.log(err),
//       });
//     },
//     error: (err) => console.log(`couldnt get userId ${err}`),
//   });
// }
