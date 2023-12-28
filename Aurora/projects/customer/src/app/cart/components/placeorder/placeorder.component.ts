import { Component, OnInit } from '@angular/core';
import { PlaceOrderService } from '../../OrderService/PlaceOrder.service';
import { UserService } from '../../../authentication/services/user.service';
import { AccountSettingService } from '../../../account-setting/AccSettingService/accountSetting.service';
import { IReadUserByEmailDto } from 'Dtos/User/IReadUserByEmailDto';
import { ReadAllShippingCompanies } from 'Dtos/Shipping Company/ReadAllShippingCompanies';
import { IReadUserPaymentByUserIdDto } from 'Dtos/User/IReadUserPaymentByUserIdDto';
import { forkJoin, switchMap } from 'rxjs';
import { IReadUserAddresByUserIdDto } from 'Dtos/User/IReadUserAddresByUserIdDto';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import AddOrderDto from 'Dtos/Order/AddOrderDto';
import { LandingService } from '../../../landing/services/landing.service';
import { OrderDetailSending } from 'Dtos/Order/orderDetailSending';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css'],
})
export class PlaceorderComponent implements OnInit {
  userEmail!: string;
  userDetails!: IReadUserByEmailDto;
  getAllShippingComp?: ReadAllShippingCompanies[];
  userPayments!: IReadUserPaymentByUserIdDto[];
  userAddress!: IReadUserAddresByUserIdDto[];
  placeOrd!:OrderDetailSending;
  
  placeOrder;
  constructor(
    private landServ :LandingService,
    private userService: UserService,
    private accSetting: AccountSettingService,
    private router: Router,
    private placeordrService: PlaceOrderService,
    public fB: FormBuilder
  ) {
    this.placeOrder = new FormGroup({
      totalPrice: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required]),
      shippId: new FormControl('', [Validators.required]),
      addId: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.userService.userEmail.subscribe((email) => (this.userEmail = email));
    this.accSetting.getUserByEmail(this.userEmail).subscribe({
      next: (usrByEmail) => (this.userDetails = usrByEmail),
      error: (err) => console.log(err),
    });
    this.landServ.orderDetails.subscribe((detail)=>{this.placeOrd=detail})
    this.accSetting
      .getUserByEmail(this.userEmail)
      .pipe(switchMap((usr) => this.accSetting.getPaymentByUserId(usr.id)))
      .subscribe({
        next: (usrPayment) => {
          this.userPayments = usrPayment;
          this.accSetting
            .getAddressByUserId(this.userDetails.id)
            .subscribe((userAddres) => (this.userAddress = userAddres));
        },
        error: (err) => console.log(err),
      });

    this.accSetting.getAllShippingCompanies().subscribe({
      next: (allShipComp) => {
        this.getAllShippingComp = allShipComp;
        console.log('=========AllShippcom===========');
        console.log(this.getAllShippingComp);
        console.log('====================');
      },
      error: (err) => console.log(err),
    });
  }
  handleSumbit(event: SubmitEvent) {
    let totalPr: number = this.placeOrder.value.totalPrice as unknown as number;
    event.preventDefault;
    console.log('error');
    if (this.placeOrder.invalid) return;
    console.log('error');

    let placeOrd: AddOrderDto = {
      totalPrice: totalPr,
      userId: this.userDetails.id,
      shippingCompanyId: this.placeOrder.value.shippId! as unknown as number,
      addressId: this.placeOrder.value.addId as unknown as number,
    };
    this.placeordrService.addOrder(placeOrd).subscribe({
      next: () => console.log('done'),
      error: () => console.log('fail'),
    });
    console.log(this.userAddress);
  }
}
