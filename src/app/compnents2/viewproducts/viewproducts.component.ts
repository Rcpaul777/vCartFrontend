import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/Services2/product.service';
import { Product } from 'src/app/ts/product';


@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
 
  products:Product[];
adminName:string;
prod:Product=new Product();
original:Product[] = [];
  searchText:string = "";


productService:ProductService;
productId:number;
message:string;

  constructor(private http:HttpClient) { }
  status:boolean;

  ngOnInit( ): void {
    this.adminName=sessionStorage.getItem("currentAdminName");
    this.getProducts();
  }

  getProducts(){
    this.http.get<any>('http://localhost:9090/products/viewAllProducts').subscribe(
      response => {
        console.log(response);
        this.products = response;
      }
    );
  }


  approve(){
    this.message='true'
   
    this.productService.approveProducts(this.productId).subscribe(
      data=> {
        this.prod=data;
        this.status=data.approved;
        
        
      }
    );
  }


  filterProducts() {
    this.products = this.original.filter
    (c =>  c.productName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0 
    ||   c.brand.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0);
    
  }

}
