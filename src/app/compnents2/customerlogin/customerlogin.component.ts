import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services2/customer.service';

import { Logincustomer } from 'src/app/ts/logincustomer';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  loginCustomer: Logincustomer = new Logincustomer();
  message: string;


  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(JSON.stringify(this.loginCustomer));
    this.customerService.customerlogin(this.loginCustomer).subscribe(
      customerStatus => {
        if (customerStatus != null) {
          this.message = '';
          sessionStorage.setItem("currentCustomerId", customerStatus.customerId.toString());
          sessionStorage.setItem("currentCustomerName", customerStatus.customerName);
          this.router.navigate(['/customerProducts']);

        }
        else {
          alert("Invalid Credentials.");
          this.message = "Invalid Credentials";
        }
      }
    );
  }
}