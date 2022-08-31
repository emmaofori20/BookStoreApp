import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly BookApiUrl="https://localhost:44332/api/auth";

  constructor(private http:HttpClient) {
    let userJson= localStorage.getItem('UserData');
    let userdata = userJson !== null ? JSON.parse(userJson) : false;

    console.log(userdata.message);
  }

  LoginUser(val:any):Observable<any[]>{
    return this.http.post<any>(this.BookApiUrl+'/login', val);
}
}
