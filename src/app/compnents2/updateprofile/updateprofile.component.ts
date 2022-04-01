import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services2/customer.service';
import { Customer } from 'src/app/ts/customer';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customerId: number;
  customer: Customer = new Customer();
  customerName: string;

  ngOnInit(): void {
    this.customerId = Number(sessionStorage.getItem("currentCustomerId"));
    this.customerService.fetchProfile(this.customerId).subscribe(
      userReceived => {
        this.customer = userReceived;
      }
    );

    this.customerName = sessionStorage.getItem("currentCustomerName");
  }

  update() {
    this.customer.customerId = this.customerId;
    this.customerService.register(this.customer).subscribe(
      updatedCustomer => {
        alert(JSON.stringify(updatedCustomer));
      }
    );
  }
}