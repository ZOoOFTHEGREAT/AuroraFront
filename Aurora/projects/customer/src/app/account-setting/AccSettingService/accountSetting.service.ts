import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddUserAddress } from 'Dtos/User/IAddUserAddress';
import { IAddUserPayment } from 'Dtos/User/IAddUserPayment';
import { environment } from 'projects/customer/src/enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountSettingService {
  constructor(private httpClient: HttpClient) {}

  addUserAddress(addUser: IAddUserAddress): Observable<IAddUserAddress> {
    const apiUrl = `${environment.apiUrl}/api/UserAddress`;
    return this.httpClient.post<IAddUserAddress>(apiUrl, addUser);
  }

  addUserPayment(addPayment: IAddUserPayment): Observable<IAddUserPayment> {
    const apiUrl = `${environment.apiUrl}/api/UserPayment`;
    return this.httpClient.post<IAddUserPayment>(apiUrl, addPayment);
  }
}
