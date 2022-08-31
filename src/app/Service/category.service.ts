import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly CategoryApiUrl="https://localhost:44332/api/category";

  constructor(private http:HttpClient) { }

  getCategoryList():Observable<any[]>{
      return this.http.get<any>(this.CategoryApiUrl+'/GetAllCategories');
  }

  addCategory(val:any){
    return this.http.post(this.CategoryApiUrl+'/AddCategory/',val);
  }

  updateCategory(val:any){
    return this.http.post(this.CategoryApiUrl+'/EditCategory/',val);
  }

  deleteCategory(val:any){
    return this.http.delete(this.CategoryApiUrl+'/deletecategory/'+val);
  }

  getBooksInCategory(val:any){
    return this.http.get(this.CategoryApiUrl+'/getBooksInCategory/',val);
  }
}
