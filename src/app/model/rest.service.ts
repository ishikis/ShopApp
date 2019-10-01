import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Category } from './category.model';
import { Order } from './order.model';
import { IRestService } from './iRest.service';
import { map } from 'rxjs/operators';

@Injectable()
export class RestService implements IRestService {

  // baseUrl: string = "http://localhost:3500/";
  baseUrl: string = "https://localhost:5001/api/";
  token: string;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'product');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'category');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'order', order);
  }


  authentication(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'token', {
      username: username,
      password: password
    }).pipe(map(response => {
      this.token = response.success ? response.token : null;
      console.log(this.token);

      return response.success;
    }));
  }
}
