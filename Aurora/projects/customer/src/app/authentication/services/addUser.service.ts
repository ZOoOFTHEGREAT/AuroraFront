import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from 'Dtos/User/IRegister';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddUserService {
  constructor(private httpClient: HttpClient) {}

  addUser(user: IRegister): Observable<IRegister> {
    return this.httpClient.post<IRegister>(
      'http://localhost:5111/api/User',
      user
    );
  }
}
