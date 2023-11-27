import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddUserAddress } from 'Dtos/User/IAddUserAddress';
import { IAddUserPayment } from 'Dtos/User/IAddUserPayment';
import { IReadUserByEmailDto } from 'Dtos/User/IReadUserByEmailDto';
import { IReadUserPaymentByUserIdDto } from 'Dtos/User/IReadUserPaymentByUserIdDto';
import { environment } from 'projects/customer/src/enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountSettingService {
  constructor(private httpClient: HttpClient) {}
  getUserByEmail(email: string): Observable<IReadUserByEmailDto> {
    const apiUrl = `${environment.apiUrl}/api/User/email/${email}`;
    return this.httpClient.get<IReadUserByEmailDto>(apiUrl);
  }
  // UpdateUserPayment() {}

  getPaymentByUserId(
    userId: string
  ): Observable<IReadUserPaymentByUserIdDto[]> {
    const apiUrl = `${environment.apiUrl}/api/UserPayment/byuser/${userId}`;
    return this.httpClient.get<IReadUserPaymentByUserIdDto[]>(apiUrl);
  }

  addUserAddress(addUser: IAddUserAddress): Observable<IAddUserAddress> {
    const apiUrl = `${environment.apiUrl}/api/UserAddress`;
    return this.httpClient.post<IAddUserAddress>(apiUrl, addUser);
  }

  addUserPayment(addPayment: IAddUserPayment): Observable<IAddUserPayment> {
    const apiUrl = `${environment.apiUrl}/api/UserPayment`;
    return this.httpClient.post<IAddUserPayment>(apiUrl, addPayment);
  }

  getUserAddressbyEmail(email: string): Observable<IAddUserAddress> {
    const apiUrl = `${environment.apiUrl}/api/User/email/${email}`;
    return this.httpClient.get<IAddUserAddress>(apiUrl);
  }
}
