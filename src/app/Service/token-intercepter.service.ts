import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = '';

    let userJson= localStorage.getItem('UserData');
    let userdata = userJson !== null ? JSON.parse(userJson) : false;

    console.log(userdata.message);

    token = userdata.message;

    let jwtToken = req.clone({
      setHeaders:{
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });

    return next.handle(jwtToken);

  }
}
