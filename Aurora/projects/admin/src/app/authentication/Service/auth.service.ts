import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddProductDto } from 'Dtos/Product/IAddProductDto';
import { ILogin } from 'Dtos/User/ILogin';
import { IRegister } from 'Dtos/User/IRegister';
import IToken from 'Dtos/User/IToken';
import { environment } from 'projects/customer/src/enviroments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root', // Or 'any' other suitable provider scope
})
export class AuthService {
  httpOptions: any;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = new HttpHeaders({
      'Content-Type': 'Application/json',
      Authorization: 'my-auth-token',
    });
  }
  public isLoggedIn = new BehaviorSubject<boolean>(false);
  public userEmail = new BehaviorSubject<string>('');
  addUser(user: IRegister): Observable<IRegister> {
    const url = `${environment.apiUrl}/api/UserAuth/register`;
    return this.httpClient.post<IRegister>(url, user);
  }

  login(loginData: ILogin): Observable<IToken> {
    const url = `${environment.apiUrl}/api/UserAuth/login`;
    return this.httpClient.post<IToken>(url, loginData).pipe(
      tap((tokenDto) => {
        this.isLoggedIn.next(true);
        localStorage.setItem('token', tokenDto.token);
      })
    );
  }

  addProduct(prod: IAddProductDto): Observable<IAddProductDto> {
    const apiUrl = `${environment.apiUrl}/api/Product/AddProduct`;
    return this.httpClient.post<IAddProductDto>(apiUrl, prod);
  }
}
