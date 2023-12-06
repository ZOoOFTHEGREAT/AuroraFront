import { Component, OnInit } from '@angular/core';
import { AccountSettingService } from '../../AccSettingService/accountSetting.service';
import { UserService } from '../../../authentication/services/user.service';
import { IReadUserByEmailDto } from 'Dtos/User/IReadUserByEmailDto';
import { IReadOrdersByUserIdDto } from 'Dtos/Order/IReadOrdersByUserIdDto';
import { switchMap } from 'rxjs';
import { ReadAllShippingCompanies } from 'Dtos/Shipping Company/ReadAllShippingCompanies';


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
userEmail?:string;
usr? : IReadUserByEmailDto;
usrId !: string;
usrOrder!:IReadOrdersByUserIdDto[];
shippingCompanies?:ReadAllShippingCompanies[];
constructor(private accountSetting :AccountSettingService,private userService :UserService) {
  
}
  ngOnInit(): void {
  this.userService.userEmail.subscribe((email)=> this.userEmail=email)

  this.accountSetting.getUserByEmail(this.userEmail!).pipe(
    switchMap((usr)=>this.accountSetting.getOrderByUserId(usr.id))
  ).subscribe({
    next:(usrOrder)=>{this.usrOrder = usrOrder ; console.log(this.usrOrder)},
    error:(err)=>console.log(err) 
  })
  this.accountSetting.getAllShippingCompanies().subscribe({
    next:(shippingComp)=> {
      this.shippingCompanies=shippingComp
      console.log(shippingComp);
    },
    error:(err)=>console.log(err)
  })
  }
}
 

