import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.url + 'Category/GetCategoryNameBySubCategoryName?subProductCategoryName=';
  constructor(private http:HttpClient) { }

  getCategoryNameBySubCategoryName(subProductCategoryName :string){
   return this.http.get(`${this.url}${subProductCategoryName}`);
  }
}
