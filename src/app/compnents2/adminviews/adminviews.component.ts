import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminviews',
  templateUrl: './adminviews.component.html',
  styleUrls: ['./adminviews.component.css']
})
export class AdminviewsComponent implements OnInit {
  adminName: string;
  adminId: number;
  constructor() { }

  ngOnInit(): void {
    this.adminName = sessionStorage.getItem("currentAdminName");
    this.adminId = Number(sessionStorage.getItem("currentAdminId"));
  }
}
