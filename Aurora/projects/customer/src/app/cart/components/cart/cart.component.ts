import { Component, OnInit } from '@angular/core';
import { AccountSettingService } from '../../../account-setting/AccSettingService/accountSetting.service';
import { CartserviceService } from '../../services/cartservice.service';
import { UserService } from '../../../authentication/services/user.service';
import { IAddUserAddress } from 'Dtos/User/IAddUserAddress';
import { IReadUserByEmailDto } from 'Dtos/User/IReadUserByEmailDto';
import { switchMap } from 'rxjs';
import IReadCartItemDto from 'Dtos/Cart/IReadCartItemDto';
import IProductDetails from 'Dtos/Product/IProductDetails';
import IReadcartbyuser from 'Dtos/Cart/IReadcartbyuser';
import { Router } from '@angular/router';
import { LandingService } from '../../../landing/services/landing.service';
import { OrderDetailSending } from 'Dtos/Order/orderDetailSending';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userLoggedEmail!: string;
  UserByMail!:IReadUserByEmailDto;
  public CartItems!:IReadCartItemDto[];
  product!:IProductDetails;
  Icart!:IReadcartbyuser;
  finalPrice:number=0;
  totalprice:number = 0;


  constructor(
    private router :Router,
    private user: UserService,
    private cart:CartserviceService,
    private account:AccountSettingService,
    private serviceProduct: LandingService,

    
  ) { }

  ngOnInit() {

    this.user.userEmail.subscribe((email) => {
      this.userLoggedEmail = email;
      this.account
        .getUserByEmail(this.userLoggedEmail!)
        .pipe(switchMap((usr) => this.cart.getCartbyuserid(usr.id)))
        .subscribe({
          next: (cart) => {
            this.Icart = cart;
          },
        });
    });
    // if(this.userLoggedEmail==''){
    //   this.router.navigateByUrl('/authuntication/login')
    // }

    this.cart.getCartItemsByCartId(this.Icart.id).subscribe({
    next: (cartitems)=>{this.CartItems = cartitems;
    },
    error:(error)=>console.log(error),
  })
  // this.CartItems.find()
    this.CartItems.forEach(element => {
      if(element.productId != null)
      {
        this.cart.getProductById(element.productId).subscribe({
          next: (product)=>{this.product = product;
          },
          error:(error)=>console.log(error),
        });
        this.finalPrice = this.product.price - (this.product.price * this.product.discountPercent);
        this.totalprice = this.totalprice + (this.finalPrice * element.quantity)

      }
    });
  }
  PlaceOrder(){
let orderDet:OrderDetailSending={
  quantity: 0,
  totalPrice: this.totalprice
}
this.serviceProduct.orderDetails.next(orderDet)
  }
  DeleteItems(){}
  }
