import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthunticationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authunticatedReq = request.clone({
      headers: request.headers.set(
        'Authurization',
        `Bearer ${localStorage.getItem('token')}`
      ),
    });
    return next.handle(authunticatedReq);
  }
}
