import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  private GET_LIST_TRENDING = 'api/v1/trending';

  constructor(private http: HttpClient) {


  }

  getListTrending(): Observable<any> {
    return this.http.get(this.GET_LIST_TRENDING);
  }
}
