import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../ts/admin';
import { Adminlogin } from '../ts/adminlogin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }


  adminLogin(adminLogin:Adminlogin):Observable<Admin>{
    return this.http.post<Admin>("http://localhost:9090/admin/loginAdmin",adminLogin)
    
    
  }
}
