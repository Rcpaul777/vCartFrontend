import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailerview',
  templateUrl: './retailerview.component.html',
  styleUrls: ['./retailerview.component.css']
})
export class RetailerviewComponent implements OnInit {

  retailerName:string;
  retailerId:string;

  constructor() { }

  ngOnInit(): void {
    this.retailerName=sessionStorage.getItem("currentRetailerName");
    this.retailerId=sessionStorage.getItem("currentRetailerId");
  }

}
