import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../ts/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>("http://localhost:9090/products/viewAllProducts")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  approveProducts(productId: number): Observable<any> {
    return this.http.get<any>("http://localhost:9090/admin/approveProduct/" + productId);
  }
}

