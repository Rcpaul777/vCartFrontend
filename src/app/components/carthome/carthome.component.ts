import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services2/cart.service';

@Component({
  selector: 'app-carthome',
  templateUrl: './carthome.component.html',
  styleUrls: ['./carthome.component.css']
})
export class CarthomeComponent implements OnInit {
public products : any = [];
public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}


