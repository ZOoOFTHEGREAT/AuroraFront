import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsettingComponent } from './accountsetting/accountsetting.component';
import { UseraddressesComponent } from './account-setting-components/useraddresses/useraddresses.component';
import { UserpaymentsComponent } from './account-setting-components/userpayments/userpayments.component';
import { UserAccountInformationComponent } from './account-setting-components/UserAccountInformation/UserAccountInformation.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AccountsettingComponent,
    UseraddressesComponent,
    UserpaymentsComponent,
    UserAccountInformationComponent,
  ],
  imports: [CommonModule],
  exports: [
    AccountsettingComponent,
    UseraddressesComponent,
    UserpaymentsComponent,
    UserAccountInformationComponent,
  ],
})
export class AccountSettingModule {}
