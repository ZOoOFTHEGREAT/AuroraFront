import { Component, OnInit } from '@angular/core';
import { PlaceOrderService } from '../../OrderService/PlaceOrder.service';
import { UserService } from '../../../authentication/services/user.service';
import { AccountSettingService } from '../../../account-setting/AccSettingService/accountSetting.service';
import { IReadUserByEmailDto } from 'Dtos/User/IReadUserByEmailDto';
import { ReadAllShippingCompanies } from 'Dtos/Shipping Company/ReadAllShippingCompanies';
import { IReadUserPaymentByUserIdDto } from 'Dtos/User/IReadUserPaymentByUserIdDto';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  userEmail!:string;
  userDetails!:IReadUserByEmailDto;
  getAllShippingComp?:ReadAllShippingCompanies[];
  userPayments!:IReadUserPaymentByUserIdDto[];
  constructor(private placeOrder:PlaceOrderService, private userService :UserService,
    private accSetting:AccountSettingService) {
  }
  ngOnInit(): void {
   
    this.userService.userEmail.subscribe((email)=> this.userEmail=email);
    this.accSetting.getUserByEmail(this.userEmail).pipe(
      switchMap((usr)=>this.accSetting.getPaymentByUserId(usr.id))).subscribe({
        next:(usrPayment)=>this.userPayments=usrPayment,
        error:(err)=>console.log(err)
      })
 
    this.accSetting.getAllShippingCompanies().subscribe({
      next:(allShipComp)=>{
        this.getAllShippingComp=allShipComp
        console.log('=========AllShippcom===========')
        console.log(this.getAllShippingComp)
        console.log('====================')
      },
      error:(err)=>console.log(err)
    })
    
  }


}
