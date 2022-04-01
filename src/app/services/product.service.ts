import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { productsUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  approveProducts(prod: Product) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productsUrl);
  }

}
