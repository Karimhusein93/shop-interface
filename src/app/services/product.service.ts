import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categoriesUrl = environment.url + 'Category/GetCategoryNameBySubCategoryName?subProductCategoryName=';
  private productsListUrl = environment.url + 'Product/GetProductsListBySubCategoryName?subcategoryName='
  constructor(private http:HttpClient) { }

  getCategoryNameBySubCategoryName(subProductCategoryName :string){
   return this.http.get(`${this.categoriesUrl}${subProductCategoryName}`);
  }
  getProductsList(subCategoryName:string){
    return this.http.get(`${this.productsListUrl}${subCategoryName}`);
  }
}
