import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../services/landing.service';
import IProductDetails from 'Dtos/Product/IProductDetails';
import { ProductcardComponent } from '../productcard/productcard.component'
import { ActivatedRoute, Router } from '@angular/router';
import IAddCartItemDto from 'Dtos/Cart/IAddCartItemDto';
import IAddOrderDto from 'Dtos/Order/IAddOrderDto';
import IAddOrderItemDto from 'Dtos/Order/IAddOrderItemDto';
import { UserService } from '../../../authentication/services/user.service';
import { CartserviceService } from '../../../cart/services/cartservice.service';
import { AccountSettingService } from '../../../account-setting/AccSettingService/accountSetting.service';
import { IReadUserByEmailDto } from 'Dtos/User/IReadUserByEmailDto';
import { IAddUserAddress } from 'Dtos/User/IAddUserAddress';
import IReadcartbyuser from 'Dtos/Cart/IReadcartbyuser';
import { switchMap } from 'rxjs';
import { OrderDetailSending } from 'Dtos/Order/orderDetailSending';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productId:any;
  productDetail!:IProductDetails;
  ChoosenQuantity:number = 0;
  cartItemToAdd!:IAddCartItemDto;
  err:any = null;
  userEmail!:string;
  user!:IReadUserByEmailDto;
  cart!:IReadcartbyuser;
  orderItemToAdd!:IAddOrderItemDto;
  totalprice:number = 0;

  constructor(
    private router :Router,
    private userServ:UserService,
    private account:AccountSettingService,
    private serviceProduct: LandingService,
    private serviceCart:CartserviceService,
    private route: ActivatedRoute,
    ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('Id');
      console.log(this.productId);
      this.productId = parseInt(this.productId)
      console.log(typeof(this.productId));
    });
    
    this.userServ.userEmail.subscribe((email)=>this.userEmail=email)

    this.serviceProduct.getProductById(this.productId).subscribe({
    next: (product)=>{this.productDetail = product;
      console.log(product)
      console.log(this.productDetail)
    },
    error:(error)=>console.log(error),
  })
  
}
AddtoCart(){
  if(this.ChoosenQuantity == 0){
    this.err = 'Choose the quantity please'
  }
  //if no user route to login 
if(this.userEmail==''){
  this.router.navigateByUrl('/authuntication/login')
}

this.userServ.userEmail.subscribe((email) => {
  this.userEmail = email;
  this.account
    .getUserByEmail(this.userEmail!)
    .pipe(switchMap((usr) => this.serviceCart.getCartbyuserid(usr.id)))
    .subscribe({
      next: (cart) => {
        this.cart = cart;
      },
    });
});

//quantaty productid cartid addtocartdto
this.cartItemToAdd.quantity = this.ChoosenQuantity;
this.cartItemToAdd.productId = parseInt(this.productId);
this.cartItemToAdd.cartId = this.cart.id;
//get the user and get his cartid
this.serviceProduct.addCartItem(this.cartItemToAdd)
}
OrderNow(){

  //route to place order

this.totalprice= this.productDetail.price*this.ChoosenQuantity;
let orderDet:OrderDetailSending={
  quantity: this.ChoosenQuantity,
  totalPrice: this.totalprice
}
this.serviceProduct.orderDetails.next(orderDet)
}
EditQuantity(quantity:number){
  this.ChoosenQuantity= quantity;
  if(this.ChoosenQuantity >this.productDetail.quantity ){
    this.err = 'Quantity chosen is not available in stock'
  }
}
}