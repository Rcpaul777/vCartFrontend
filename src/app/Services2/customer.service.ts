import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../ts/customer';
import { Logincustomer } from '../ts/logincustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  register(customer:Customer):Observable<any>{
    return this.http.post<Customer> ("http://localhost:9090/customer/addCustomer",customer);

  }
  
  customerlogin(loginCustomer:Logincustomer):Observable<Customer>{

    return this.http.post<Customer>("http://localhost:9090/customer/loginCustomer",loginCustomer);

  }

  fetchProfile(customerId:number):Observable<Customer>{
    return this.http.get<Customer>("http://localhost:9090/customer/findCustomerById/"+customerId);
  }
}
