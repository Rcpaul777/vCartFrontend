import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerService } from 'src/app/Services2/retailer.service';
import { Retailerlogin } from 'src/app/ts/retailerlogin';

@Component({
  selector: 'app-retailerlogin',
  templateUrl: './retailerlogin.component.html',
  styleUrls: ['./retailerlogin.component.css']
})
export class RetailerloginComponent implements OnInit {
  message: string;
  loginRetailer: Retailerlogin = new Retailerlogin();
  constructor(private retailerService: RetailerService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.message = 'hello';
    console.log(JSON.stringify(this.loginRetailer));
    this.retailerService.retailerLogin(this.loginRetailer).subscribe(
      retailerStatus => {
        if (retailerStatus != null) {
          this.message = '';
          sessionStorage.setItem("currentRetailerId", retailerStatus.retailerId.toString());
          sessionStorage.setItem("currentRetailerName", retailerStatus.retailerName);
          this.router.navigate(['/retailerView']);


        }
        else {
          alert("Invalid Credentials.");
          this.message = "Invalid Credentials";

        }
      }
    );
  }
}