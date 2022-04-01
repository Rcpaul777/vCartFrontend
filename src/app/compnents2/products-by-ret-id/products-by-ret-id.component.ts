import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/ts/product';

@Component({
  selector: 'app-products-by-ret-id',
  templateUrl: './products-by-ret-id.component.html',
  styleUrls: ['./products-by-ret-id.component.css']
})
export class ProductsByRetIdComponent implements OnInit {
  retailerId: number;
  product: Product[];
  retailerName: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.retailerId = Number(sessionStorage.getItem("currentRetailerId"));
    this.retailerName = sessionStorage.getItem("currentRetailerName");
    this.getProducts();
  }
  getProducts() {
    this.http.get<any>('http://localhost:9090/retailers/retailerProducts/1001').subscribe(
      response => {
        console.log(response);
        this.product = response;
      }
    );
  }
}

