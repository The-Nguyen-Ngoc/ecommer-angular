import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private GET_LIST_PRODUCTS = 'api/v1/products';

  constructor(private http: HttpClient) {


  }

  getListProductByCategory(idCategory: string): Observable<any> {
    return this.http.get(this.GET_LIST_PRODUCTS + '/' +idCategory);
  }
}

