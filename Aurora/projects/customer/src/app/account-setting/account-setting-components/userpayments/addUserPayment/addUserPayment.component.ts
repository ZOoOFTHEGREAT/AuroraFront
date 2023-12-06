import { Router } from '@angular/router';
import { IAddUserPayment } from 'Dtos/User/IAddUserPayment';
import { AccountSettingService } from '../../../AccSettingService/accountSetting.service';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
=======
import { UserService } from 'projects/customer/src/app/authentication/services/user.service';
import { switchMap } from 'rxjs/operators';
import { IReadUserByEmailDto } from 'Dtos/User/IReadUserByEmailDto';
>>>>>>> 571f6b561145b81a64f27d4b5873663ead75e975
@Component({
  selector: 'app-addUserPayment',
  templateUrl: './addUserPayment.component.html',
  styleUrls: ['./addUserPayment.component.css'],
})
export class AddUserPaymentComponent implements OnInit {
  addUserPayment;
  tryAgainError?: boolean;
  userId?: string;
  userEmail?: string;
  usr?: IReadUserByEmailDto;

  constructor(
    private router: Router,
    private userService: UserService,
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
    this.userService.userEmail.subscribe((email) => (this.userEmail = email));
    this.addPayment.getUserByEmail(this.userEmail!).subscribe({
      next: (usr) => (this.usr = usr),
      error: (err) => console.error(err),
    });
  }
  handleSubmit($event: SubmitEvent) {
    $event.preventDefault;
    let addPayment: IAddUserPayment = {
      paymentType: this.addUserPayment.value.PaymentType!,
      provider: this.addUserPayment.value.Provider!,
      accountNumber: this.addUserPayment.value.AccountNumber!,
      expireDate: this.addUserPayment.value.ExpireDate!,
      userId: this.usr?.id!,
    };
    this.addPayment.addUserPayment(addPayment).subscribe({
      next: () => this.router.navigateByUrl('/accountsetting/userpayment'),
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

// this.userService.userEmail
//   .pipe(
//     switchMap((email) => {
//       this.userEmail = email;
//       return this.addPayment.getUserByEmail(email);
//     })
//   )
//   .subscribe({
//     next: (usr) => {
//       this.userId = usr.id;
//       console.log(`this is usr id`)
//     },
//     error: (err) => {
//       console.error(err);
//     },
//   });
