import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddUserAddress } from 'Dtos/User/IAddUserAddress';
import { IAddUserPayment } from 'Dtos/User/IAddUserPayment';
import { IReadUserAddresByUserIdDto } from 'Dtos/User/IReadUserAddresByUserIdDto';
import { IReadUserByEmailDto } from 'Dtos/User/IReadUserByEmailDto';
import { IReadUserPaymentByUserIdDto } from 'Dtos/User/IReadUserPaymentByUserIdDto';
import { IUpdatePassword } from 'Dtos/User/IUpdatePassword';
import { IUpdateUserAddressDto } from 'Dtos/User/IUpdateUserAddressDto';
import { IUpdateUserDto } from 'Dtos/User/IUpdateUserDto';
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
  deletePayment(id: number): Observable<IAddUserAddress> {
    const apiUrl = `${environment.apiUrl}/api/UserPayment/${id}`;
    return this.httpClient.delete<IAddUserAddress>(apiUrl);
  }
  getPaymentByUserId(
    userId: string
  ): Observable<IReadUserPaymentByUserIdDto[]> {
    const apiUrl = `${environment.apiUrl}/api/UserPayment/byuser/${userId}`;
    return this.httpClient.get<IReadUserPaymentByUserIdDto[]>(apiUrl);
  }
  getAddressByUserId(userId: string): Observable<IReadUserAddresByUserIdDto[]> {
    const apiUrl = `${environment.apiUrl}/api/UserAddress/userid/${userId}`;
    return this.httpClient.get<IReadUserAddresByUserIdDto[]>(apiUrl);
  }
  updateUserAddress(
    updateAddress: IUpdateUserAddressDto
  ): Observable<IUpdateUserAddressDto> {
    const apiUrl = `${environment.apiUrl}/api/UserAddress/${updateAddress.Id}`;
    return this.httpClient.put<IUpdateUserAddressDto>(apiUrl, updateAddress);
  }
  addUserAddress(addAddress: IAddUserAddress): Observable<IAddUserAddress> {
    const apiUrl = `${environment.apiUrl}/api/UserAddress`;
    return this.httpClient.post<IAddUserAddress>(apiUrl, addAddress);
  }
  deleteUserAddress(id: number): Observable<IReadUserAddresByUserIdDto> {
    const apiUrl = `${environment.apiUrl}/api/UserAddress/${id}`;
    return this.httpClient.delete<IReadUserAddresByUserIdDto>(apiUrl);
  }
  addUserPayment(addPayment: IAddUserPayment): Observable<IAddUserPayment> {
    const apiUrl = `${environment.apiUrl}/api/UserPayment`;
    return this.httpClient.post<IAddUserPayment>(apiUrl, addPayment);
  }
  updateUserData(updatedUser: IUpdateUserDto): Observable<IUpdateUserDto> {
    const apiUrl = `${environment.apiUrl}/api/UserAuth`;
    return this.httpClient.put<IUpdateUserDto>(apiUrl, updatedUser);
  }
  updateUserPw(updatedPwDto: IUpdatePassword): Observable<IUpdatePassword> {
    const apiUrl = `${environment.apiUrl}/api/UserAuth/updatepw`;
    return this.httpClient.put<IUpdatePassword>(apiUrl, updatedPwDto);
  }
  getUserAddressbyEmail(email: string): Observable<IAddUserAddress> {
    const apiUrl = `${environment.apiUrl}/api/User/email/${email}`;
    return this.httpClient.get<IAddUserAddress>(apiUrl);
  }
  // updateUser(updatedUser: IUpdateUserDto): Observable<IUpdateUserDto> {
  //   const apiUrl = `${environment.apiUrl}/api/User`;
  //   return this.httpClient.put<IUpdateUserDto>(apiUrl, updatedUser);
  // }
}
