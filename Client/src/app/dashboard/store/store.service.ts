import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Product} from './Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StoreService {
  private getProductsUrl = "http://localhost:3000/api/product/getProducts";
  private createProductUrl = "http://localhost:3000/api/product/createProduct";
  constructor(private http: HttpClient ) { }


  getProducts(): Observable<any>{
    return this.http.get(this.getProductsUrl);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.createProductUrl,product);
  }

}
