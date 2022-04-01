import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RetailerService } from 'src/app/Services2/retailer.service';
import { Retailer } from 'src/app/ts/retailer';

@Component({
  selector: 'app-retailerregistration',
  templateUrl: './retailerregistration.component.html',
  styleUrls: ['./retailerregistration.component.css']
})
export class RetailerregistrationComponent implements OnInit {
  submitted = false;
  constructor(private add: RetailerService, private router: Router) { }

  ngOnInit(): void {
  }

  retailer: Retailer = new Retailer();
  register() {
    this.submitted = true;
    this.add.register(this.retailer).subscribe(
      data => this.retailer = data

    );
    console.log(this.retailer)

  }
}