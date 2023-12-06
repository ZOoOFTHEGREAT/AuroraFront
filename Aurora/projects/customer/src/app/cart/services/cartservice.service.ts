import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/customer/src/enviroments/environment';
import { Observable } from 'rxjs';
import IProductDetails from 'Dtos/Product/IProductDetails';
import IReadCartItemDto from 'Dtos/Cart/IReadCartItemDto';
import IReadcartbyuser from 'Dtos/Cart/IReadcartbyuser';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor(private httpClient: HttpClient) {}

  getProductById(ProductId: Number): Observable<IProductDetails> {
    const apiUrl = `${environment.apiUrl}/api/Product/${ProductId}`;
    return this.httpClient.get<IProductDetails>(apiUrl);
  }
  getCartItemsByCartId(CartId: Number): Observable<IReadCartItemDto[]> {
    const apiUrl = `${environment.apiUrl}api/CartItem/${CartId}`;
    return this.httpClient.get<IReadCartItemDto[]>(apiUrl);
  }
  getCartbyuserid(UserId: string): Observable<IReadcartbyuser> {
    const apiUrl = `${environment.apiUrl}api/Cart/${UserId}`;
    return this.httpClient.get<IReadcartbyuser>(apiUrl);
  }
  deleteCartItemByCartItemId(CartItemId: Number): Observable<IReadCartItemDto> {
    const apiUrl = `${environment.apiUrl}api/CartItem/${CartItemId}`;
    return this.httpClient.delete<IReadCartItemDto>(apiUrl);
  }
}
//api/CartItem/{id}