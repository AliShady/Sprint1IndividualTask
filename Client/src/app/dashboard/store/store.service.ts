import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Product} from './Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StoreService {
  private getProductsUrl = "http://localhost:3000/api/product/getProducts";
  private createProductUrl = "http://localhost:3000/api/product/createProduct";
  private deleteProductUrl = "http://localhost:3000/api//product/deleteProduct";
  private getProductUrl = "http://localhost:3000/api/product/getProduct";
  constructor(private http: HttpClient ) { }


  getProducts(): Observable<any>{
    return this.http.get(this.getProductsUrl);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.createProductUrl,product);
  }

  deleteProduct(toDeleteId: any): Observable<any>{
    console.log(`${this.deleteProductUrl}/${toDeleteId}`);
    return this.http.delete<any>(`${this.deleteProductUrl}/${toDeleteId}`);
  }

  getProduct(id: any): Observable<any>{
    return this.http.get(`${this.getProductUrl}/${id}`);
  }

}
