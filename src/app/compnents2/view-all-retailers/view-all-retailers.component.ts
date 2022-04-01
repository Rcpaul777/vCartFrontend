import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RetailerService } from 'src/app/Services2/retailer.service';
import { Retailer } from 'src/app/ts/retailer';

@Component({
  selector: 'app-view-all-retailers',
  templateUrl: './view-all-retailers.component.html',
  styleUrls: ['./view-all-retailers.component.css']
})
export class ViewAllRetailersComponent implements OnInit {
  message:string;
  retailerService:RetailerService;
  retailerId:number;
  ret:Retailer[];
  msg2:string;
  constructor(private http:HttpClient) { }
retailer:Retailer[]
  ngOnInit(): void {
    this.getRetailer();
  }

  approveRetailer(){
    this.msg2='true';
  }



  getRetailer(){
    this.message="true";
    this.http.get<any>('http://localhost:9090/retailers/viewAllRetailers').subscribe(
      response => {
        console.log(response);
        this.retailer = response;
      }
    );
  }

}
