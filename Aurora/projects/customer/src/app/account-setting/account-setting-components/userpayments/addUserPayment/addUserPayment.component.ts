import { Router } from '@angular/router';
import { IAddUserPayment } from 'Dtos/User/IAddUserPayment';
import { AccountSettingService } from '../../../AccSettingService/accountSetting.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
@Component({
  selector: 'app-addUserPayment',
  templateUrl: './addUserPayment.component.html',
  styleUrls: ['./addUserPayment.component.css'],
})
export class AddUserPaymentComponent {
  addUserPayment;
  tryAgainError?: boolean;
  constructor(
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
  handleSubmit($event: SubmitEvent) {
    $event.preventDefault;
    let addPayment: IAddUserPayment = {
      paymentType: this.addUserPayment.value.PaymentType!,
      provider: this.addUserPayment.value.Provider!,
      accountNumber: this.addUserPayment.value.AccountNumber!,
      expireDate: this.addUserPayment.value.ExpireDate!,
      userId: '5dc1d98e-c713-4463-b261-f7619f6a6372',
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
