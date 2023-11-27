import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsettingComponent } from './accountsetting/accountsetting.component';
import { UseraddressesComponent } from './account-setting-components/useraddresses/useraddresses.component';
import { UserpaymentsComponent } from './account-setting-components/userpayments/userpayments.component';
import { UserAccountInformationComponent } from './account-setting-components/UserAccountInformation/UserAccountInformation.component';
import { AccountsettingRoutingModule } from './accountsetting-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserAddressComponent } from './account-setting-components/useraddresses/AddUserAddress/AddUserAddress.component';
import { AddUserPaymentComponent } from './account-setting-components/userpayments/addUserPayment/addUserPayment.component';
import { EditUserPaymentComponent } from './account-setting-components/userpayments/EditUserPayment/EditUserPayment.component';

@NgModule({
  declarations: [
    AccountsettingComponent,
    UseraddressesComponent,
    UserpaymentsComponent,
    UserAccountInformationComponent,
    AddUserAddressComponent,
    AddUserPaymentComponent,
    EditUserPaymentComponent,
  ],
  imports: [CommonModule, AccountsettingRoutingModule, ReactiveFormsModule],
  exports: [
    AccountsettingComponent,
    UseraddressesComponent,
    UserpaymentsComponent,
    UserAccountInformationComponent,
    AddUserAddressComponent,
    AddUserPaymentComponent,
    EditUserPaymentComponent,
  ],
})
export class AccountSettingModule {}
