import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AddOrderDto from 'Dtos/Order/AddOrderDto';
import { IAddPaymentDetailDto } from 'Dtos/Paymentdetails/IAddPaymentDetailDto';
import { environment } from 'projects/customer/src/enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaceOrderService {
  constructor(private httpClient: HttpClient) {}

  addOrder(addOrder: AddOrderDto): Observable<AddOrderDto> {
    const apiUrl = `${environment.apiUrl}/api/Order/AddOrder`;
    return this.httpClient.post<AddOrderDto>(apiUrl, addOrder);
  }

  addPaymentDetails(
    addPaymentDetails: IAddPaymentDetailDto
  ): Observable<IAddPaymentDetailDto> {
    const apiUrl = `${environment.apiUrl}/api/PaymentDetail/AddPayment`;
    return this.httpClient.post<IAddPaymentDetailDto>(
      apiUrl,
      addPaymentDetails
    );
  }
}
