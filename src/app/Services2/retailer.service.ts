import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../ts/product';
import { Retailer } from '../ts/retailer';
import { Retailerlogin } from '../ts/retailerlogin';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  constructor(private http:HttpClient) { }

  register(retailer:Retailer):Observable<Retailer>{
    return this.http.post<Retailer> ("http://localhost:9090/retailers/addOrRetailer",retailer);
  }

  retailerLogin(loginRetailer:Retailerlogin):Observable<Retailer>{
    return this.http.post<Retailer>("http://localhost:9090/retailers/loginRetailer",loginRetailer)
    
  }

  fetchProfile(retailerId:number):Observable<Retailer>{
    return this.http.get<Retailer>("http://localhost:9090/retailers/findRetailerById/"+retailerId);
  
}

addProduct(retailerId:number,product:Product):Observable<Product>{
  return this.http.post<Product>("http://localhost:9090/retailers/addProductByRetailer/1001"+retailerId,product)
}
approveRetailer(retailerId:number):Observable<Retailer>{
  return this.http.get<Retailer>("http://localhost:9090/retailers/findRetailerById/"+retailerId);

}


}