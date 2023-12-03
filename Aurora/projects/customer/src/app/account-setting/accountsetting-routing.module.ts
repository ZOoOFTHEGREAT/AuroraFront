import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseraddressesComponent } from './account-setting-components/useraddresses/useraddresses.component';
import { UserpaymentsComponent } from './account-setting-components/userpayments/userpayments.component';
import { UserAccountInformationComponent } from './account-setting-components/UserAccountInformation/UserAccountInformation.component';
import { AddUserAddressComponent } from './account-setting-components/useraddresses/AddUserAddress/AddUserAddress.component';
import { AccountsettingComponent } from './accountsetting/accountsetting.component';
import { AddUserPaymentComponent } from './account-setting-components/userpayments/addUserPayment/addUserPayment.component';
import { EditUserPaymentComponent } from './account-setting-components/userpayments/EditUserPayment/EditUserPayment.component';
import { EditUserAddressComponent } from './account-setting-components/useraddresses/EditUserAddress/EditUserAddress.component';
import { UpdatePasswordComponent } from './account-setting-components/UserAccountInformation/UpdatePassword/UpdatePassword.component';
import { accountsettingGuard } from '../authentication/accountsetting.guard';

const routes: Routes = [
  { path: '', component: AccountsettingComponent },
  { path: 'useraddress', component: UseraddressesComponent },
  {
    path: 'userpayment',
    component: UserpaymentsComponent,
  },
  { path: 'editaddress/:id', component: EditUserAddressComponent },
  {
    path: 'editpayment',
    component: EditUserPaymentComponent,
  },
  {
    path: 'addpayment',
    component: AddUserPaymentComponent,
  },
  // { path: 'userinfo', component: UserAccountInformationComponent },
  {
    path: 'addaddress',
    component: AddUserAddressComponent,
  },
  {
    path: 'accountinfo',
    canActivate: [accountsettingGuard],
    component: UserAccountInformationComponent,
  },
  {
    path: 'changepw',
    component: UpdatePasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsettingRoutingModule {}
