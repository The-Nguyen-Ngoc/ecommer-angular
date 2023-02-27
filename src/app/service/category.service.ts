import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private GET_LIST_CATEGORY = 'api/v1/category';

  constructor(private http: HttpClient) {


  }

  getListCategory(): Observable<any> {
    return this.http.get(this.GET_LIST_CATEGORY);
  }
}
