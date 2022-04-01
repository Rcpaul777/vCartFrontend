import { Component, OnInit } from '@angular/core';
import { RetailerService } from 'src/app/Services2/retailer.service';
import { Product } from 'src/app/ts/product';
import { Retailer } from 'src/app/ts/retailer';

@Component({
  selector: 'app-add-products-by-retailer',
  templateUrl: './add-products-by-retailer.component.html',
  styleUrls: ['./add-products-by-retailer.component.css']
})
export class AddProductsByRetailerComponent implements OnInit {
  retailerId: number;
  constructor(private retailerService: RetailerService) { }

  product: Product = new Product();
  ngOnInit(): void {
    this.retailerId = Number(sessionStorage.getItem("currentRetailerId"));
  }

  addProducts() {
    console.log(JSON.stringify(this.product));

    this.retailerService.addProduct(this.retailerId, this.product).subscribe(
      data => this.product = data
    );
  }
}