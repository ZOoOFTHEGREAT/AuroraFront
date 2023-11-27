import { Component, OnInit } from '@angular/core';
import { IAddUserAddress } from 'Dtos/User/IAddUserAddress';
import { AccountSettingService } from '../../AccSettingService/accountSetting.service';

@Component({
  selector: 'app-UserAccountInformation',
  templateUrl: './UserAccountInformation.component.html',
  styleUrls: ['./UserAccountInformation.component.css'],
})
export class UserAccountInformationComponent implements OnInit {
  constructor(private userInfo: AccountSettingService) {}
  userData?: IAddUserAddress;
  usrEmail: string = '';
  ngOnInit() {
    // this.userInfo.getUserbyEmail(this.usrEmail);
  }
}
