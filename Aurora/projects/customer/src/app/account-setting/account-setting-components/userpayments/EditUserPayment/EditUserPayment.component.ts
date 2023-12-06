import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAddUserPayment } from 'Dtos/User/IAddUserPayment';
import { AccountSettingService } from '../../../AccSettingService/accountSetting.service';
import { Router } from '@angular/router';
import { IReadUserPaymentByUserIdDto } from 'Dtos/User/IReadUserPaymentByUserIdDto';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'projects/customer/src/app/authentication/services/user.service';

@Component({
  selector: 'app-EditUserPayment',
  templateUrl: './EditUserPayment.component.html',
  styleUrls: ['./EditUserPayment.component.css'],
})
export class EditUserPaymentComponent implements OnInit {
  userLoggedEmail?: string;
  userId?: string;
  accountNumber?: string;
  provider?: string;
  userPaymentDetails?: IReadUserPaymentByUserIdDto[];
  addUserPayment;
  tryAgainError?: boolean;
  constructor(
    private userService: UserService,
    private router: Router,
    private addPayment: AccountSettingService
  ) {
    this.addUserPayment = new FormGroup({
      PaymentType: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
      Provider: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
      AccountNumber: new FormControl<string>('', [
        Validators.maxLength(16),
        Validators.minLength(11),
      ]),
      ExpireDate: new FormControl<string>('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.userService.userEmail.subscribe((email) => {
      this.userLoggedEmail = email;
      this.addPayment
        .getUserByEmail(this.userLoggedEmail!)
        .pipe(
          switchMap((usr) => {
            this.userId = usr.id;
            return this.addPayment.getPaymentByUserId(usr.id);
          })
        )
        .subscribe({
          next: (usr) => {
            let getUsr = usr.find((obj) => obj.userId == this.userId);
            let addPayment = {
              PaymentType: getUsr!.paymentType,
              Provider: getUsr!.provider,
              AccountNumber: getUsr!.accountNumber,
              ExpireDate: getUsr!.expireDate,
            };
            this.userId = getUsr?.userId;
            this.addUserPayment.setValue(addPayment);
          },
        });
      // .subscribe({
      //   next: (userPaymentDetails) => {
      //     this.userPaymentDetails = userPaymentDetails;
      //     let getUsr = userPaymentDetails.find(
      //       (obj) => obj.userId == userPaymentDetails[0].userId
      //     );
      //     let addPayment = {
      //       PaymentType: getUsr!.paymentType,
      //       Provider: getUsr!.provider,
      //       AccountNumber: getUsr!.accountNumber,
      //       ExpireDate: getUsr!.expireDate,
      //     };
      //     this.userId = getUsr?.userId;
      //     this.addUserPayment.setValue(addPayment);
      //   },
      //   error: (err) => console.log(err),
      // });
    });
  }
  handleSubmit($event: SubmitEvent) {
    $event.preventDefault;
    console.log(`id ` + this.userId);
    let addPayment: IAddUserPayment = {
      paymentType: this.addUserPayment.value.PaymentType!,
      provider: this.addUserPayment.value.Provider!,
      accountNumber: this.addUserPayment.value.AccountNumber!,
      expireDate: this.addUserPayment.value.ExpireDate!,
      userId: this.userId!,
    };
    this.addPayment.addUserPayment(addPayment).subscribe({
      next: () => this.router.navigateByUrl('/accountsetting'),
      error: (err: boolean) => {
        this.tryAgainError = true;
      },
    });
  }

  get PaymentType() {
    return this.addUserPayment.get('PaymentType');
  }
  get Provider() {
    return this.addUserPayment.get('Provider');
  }
  get AccountNumber() {
    return this.addUserPayment.get('AccountNumber');
  }
  get ExpireDate() {
    return this.addUserPayment.get('ExpireDate');
  }
}
