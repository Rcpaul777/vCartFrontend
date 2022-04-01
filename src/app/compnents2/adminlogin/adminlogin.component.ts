import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services2/admin.service';
import { Adminlogin } from 'src/app/ts/adminlogin';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  message: string;
  adminLogin: Adminlogin = new Adminlogin();

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(JSON.stringify(this.adminLogin));
    this.adminService.adminLogin(this.adminLogin).subscribe(
      adminStatus => {
        if (adminStatus != null) {
          this.message = '';
          sessionStorage.setItem("currentAdminId", adminStatus.adminId.toString());
          sessionStorage.setItem("currentAdminName", adminStatus.adminName);
          this.router.navigate(['/adminViews']);
        }
        else {
          alert("Invalid Credentials.");
          this.message = "Invalid Credentials";

        }
      }
    );
  }
}