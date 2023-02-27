import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private GET_LIST_NAVIGATIONS = 'api/v1/navigations';

  constructor(private http: HttpClient) {


  }

  getListNavigations(): Observable<any> {
    return this.http.get(this.GET_LIST_NAVIGATIONS);
  }


}
