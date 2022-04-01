import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services2/customer.service';
import { Customer } from 'src/app/ts/customer';

@Component({
  selector: 'app-customerregistraion',
  templateUrl: './customerregistraion.component.html',
  styleUrls: ['./customerregistraion.component.css']
})
export class CustomerregistraionComponent implements OnInit {
message:string;  
  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }

  car: Customer=new Customer();
  register() {
    console.log(JSON.stringify(this.car));
    
    
    this.customerService.register(this.car).subscribe(
      data=>{
        if(data.status=="SUCCESS"){
          this.router.navigate(['/customerLogin']);
        
        }
        else {
          this.message="Registration Failed.";
        }
      }
      
    );
   

  }

}
