import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from 'Dtos/User/ILogin';
import { IRegister } from 'Dtos/User/IRegister';
import IToken from 'Dtos/User/IToken';
import { environment } from 'projects/customer/src/enviroments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOptions: any;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = new HttpHeaders({
      'Content-Type': 'Application/json',
      Authorization: 'my-auth-token',
    });
  }

  addUser(user: IRegister): Observable<IRegister> {
    const url = `${environment.apiUrl}/api/UserAuth/register`;
    return this.httpClient.post<IRegister>(url, user);
  }

  login(loginData: ILogin): Observable<IToken> {
    const url = `${environment.apiUrl}/api/UserAuth/login`;
    return this.httpClient.post<IToken>(url, loginData).pipe(
      tap((tokenDto) => {
        localStorage.setItem('token', tokenDto.token);
      })
    );
  }
}
