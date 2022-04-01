import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsByRetailerComponent } from './compnents2/add-products-by-retailer/add-products-by-retailer.component';
import { AdminloginComponent } from './compnents2/adminlogin/adminlogin.component';
import { AdminviewsComponent } from './compnents2/adminviews/adminviews.component';
import { CustomerdashboardComponent } from './compnents2/customerdashboard/customerdashboard.component';
import { CustomerloginComponent } from './compnents2/customerlogin/customerlogin.component';
import { CustomerregistraionComponent } from './compnents2/customerregistraion/customerregistraion.component';
import { HomepageComponent } from './compnents2/homepage/homepage.component';
import { ProductsByRetIdComponent } from './compnents2/products-by-ret-id/products-by-ret-id.component';
import { RetailerdashboardComponent } from './compnents2/retailerdashboard/retailerdashboard.component';
import { RetailerloginComponent } from './compnents2/retailerlogin/retailerlogin.component';
import { RetailerregistrationComponent } from './compnents2/retailerregistration/retailerregistration.component';
import { RetailerviewComponent } from './compnents2/retailerview/retailerview.component';
import { UpdateprofileComponent } from './compnents2/updateprofile/updateprofile.component';
import { ViewAllRetailersComponent } from './compnents2/view-all-retailers/view-all-retailers.component';
import { ViewproductsComponent } from './compnents2/viewproducts/viewproducts.component';
import { CustomerproductsComponent } from './component2/customerproducts/customerproducts.component';
import { CarthomeComponent } from './components/carthome/carthome.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { CartComponent } from './component2/cart/cart.component';
import { CheckoutComponent } from './components/shopping-cart/checkout/checkout.component';
import { PaySuccessComponent } from './components/pay-success/pay-success.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'customerDashboard',component:CustomerdashboardComponent},
  {path:'customerLogin',component:CustomerloginComponent},
  {path:'CustomerRegistraionLink',component:CustomerregistraionComponent},
  {path:'retailerDashboard',component:RetailerdashboardComponent},
  {path:'RetailerRegistrationLink',component:RetailerregistrationComponent},
  {path:'retailerLogin',component:RetailerloginComponent},
  {path:'adminLogin',component:AdminloginComponent},
  {path:'cartHome',component:CarthomeComponent},
  {path:'updateProfile',component:UpdateprofileComponent},
  {path:'viewAllProducts',component:ViewproductsComponent},
  {path:'adminViews',component:AdminviewsComponent},
  {path:'viewAllRetailer',component:ViewAllRetailersComponent},
  {path:'addProductByRetailer',component:AddProductsByRetailerComponent},
  {path:'retailerView',component:RetailerviewComponent},
  {path:'productsByRetailerId',component:ProductsByRetIdComponent},
  {path:'customerProducts',component:CustomerproductsComponent},
  {path:'cartitem',component:ProductListComponent},
  {path:'proditem',component:ProductItemComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'paysuccess',component:PaySuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
