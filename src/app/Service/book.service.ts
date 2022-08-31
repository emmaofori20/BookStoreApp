import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly BookApiUrl="https://localhost:44332/api/book";

  constructor(private http:HttpClient) { }

  getBookList():Observable<any[]>{
      return this.http.get<any>(this.BookApiUrl+'/getallbooks');
  }

  addBook(val:any){
    return this.http.post(this.BookApiUrl+'/AddBook/',val);
  }

  updateBook(val:any){
    return this.http.post(this.BookApiUrl+'/EditBook/',val);
  }

  deleteBook(val:any){
    return this.http.delete(this.BookApiUrl+'/deletebook/'+val);
  }
}
