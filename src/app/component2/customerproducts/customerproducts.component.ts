import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/Services2/product.service';
import { CartService } from 'src/app/Services2/cart.service';
import { Product } from 'src/app/ts/product'

@Component({
  selector: 'app-customerproducts',
  templateUrl: './customerproducts.component.html',
  styleUrls: ['./customerproducts.component.css']
})
export class CustomerproductsComponent implements OnInit {
  products: any;
  adminName: string;
  public searchTerm !: string;
  public filterCategory: any;
  searchKey: string = "";
  prod: Product = new Product();
  original: Product[] = [];
  searchText: string = "";


  productService: ProductService;
  productId: number;
  message: string;

  constructor(private http: HttpClient, private api: ProductService, private cartService: CartService) { }
  status: boolean;
  filter(categoryName: string) {
    console.log(categoryName)
    this.filterCategory = this.products
      .filter((a: any) => {
        if (a.categoryName == categoryName || categoryName == '') {
          console.log(a)
          return a;
          //window.location.reload();
        }
      })
  }
  ngOnInit(): void {
    this.adminName = sessionStorage.getItem("currentAdminName");
    this.api.getProducts()
      .subscribe(res => {
        this.products = res;
        this.filterCategory = res;
        this.products.forEach((a: any) => {
          if (a.categoryName === "women's clothing" || a.categoryName === "men's clothing") {
            a.categoryName = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.productPrice });
        });
        console.log(this.products)
        this.cartService.getProducts()

      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
    console.log(item)
  }


  approve() {
    this.message = 'true'

    this.productService.approveProducts(this.productId).subscribe(
      data => {
        this.prod = data;
        this.status = data.approved;


      }
    );
  }
}




/*
  getProducts(){
    this.http.get<any>('http://localhost:9090/products/viewAllProducts').subscribe(
      response => {
        console.log(response);
        this.products = response;
        this.filterCategory = response;
      }
    );
  }
*/

