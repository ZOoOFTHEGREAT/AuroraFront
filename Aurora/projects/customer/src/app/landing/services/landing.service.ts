import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'projects/customer/src/enviroments/environment';
import IProductDetails from 'Dtos/Product/IProductDetails';
import IReadCategoriesDto from 'Dtos/Category/IReadCategoriesDto';
import IAddCartItemDto from 'Dtos/Cart/IAddCartItemDto';
import { ProductcardComponent } from '../components/productcard/productcard.component';
import { OrderDetailSending } from 'Dtos/Order/orderDetailSending';

@Injectable({
  providedIn: 'root'
})

export class LandingService {
orderDet:OrderDetailSending={
  quantity: 0,
  totalPrice: 0
};
  constructor(private httpClient: HttpClient){}
  public orderDetails = new BehaviorSubject<OrderDetailSending>(this.orderDet);

  categoryChoosen!:IReadCategoriesDto;
  filteredProducts!:IProductDetails[];

  getProductById(ProductId: Number): Observable<IProductDetails> {
    const apiUrl = `${environment.apiUrl}/api/Product/${ProductId}`;
    return this.httpClient.get<IProductDetails>(apiUrl);
  }
  getAllCategories():Observable<IReadCategoriesDto[]>{
    const apiUrl = `${environment.apiUrl}/api/Category/Categories`;
    return this.httpClient.get<IReadCategoriesDto[]>(apiUrl);
  }
  getAllProducts(): Observable<IProductDetails[]>{
      const apiUrl = `${environment.apiUrl}/api/Product/Products`;
      return this.httpClient.get<IProductDetails[]>(apiUrl);
  }
  addCartItem(cartItem : IAddCartItemDto) : Observable<IAddCartItemDto>{
    const url = `${environment.apiUrl}/api/CartItem`;
    return this.httpClient.post<IAddCartItemDto>(url,cartItem);
  }
  assignProducts(){
    this.filteredProducts = this.categoryChoosen.products;
  }
}