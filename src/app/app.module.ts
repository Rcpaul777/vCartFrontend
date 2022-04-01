import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { HomepageComponent } from './compnents2/homepage/homepage.component';
import { CarthomeComponent } from './components/carthome/carthome.component';
import { CustomerdashboardComponent } from './compnents2/customerdashboard/customerdashboard.component';
import { CustomerloginComponent } from './compnents2/customerlogin/customerlogin.component';
import { CustomerregistraionComponent } from './compnents2/customerregistraion/customerregistraion.component';
import { RetailerdashboardComponent } from './compnents2/retailerdashboard/retailerdashboard.component';
import { RetailerregistrationComponent } from './compnents2/retailerregistration/retailerregistration.component';
import { RetailerloginComponent } from './compnents2/retailerlogin/retailerlogin.component';
import { AdminloginComponent } from './compnents2/adminlogin/adminlogin.component';
import { UpdateprofileComponent } from './compnents2/updateprofile/updateprofile.component';
import { ViewproductsComponent } from './compnents2/viewproducts/viewproducts.component';
import { ViewAllRetailersComponent } from './compnents2/view-all-retailers/view-all-retailers.component';
import { AdminviewsComponent } from './compnents2/adminviews/adminviews.component';
import { RetailerviewComponent } from './compnents2/retailerview/retailerview.component';
import { AddProductsByRetailerComponent } from './compnents2/add-products-by-retailer/add-products-by-retailer.component';
import { ProductsByRetIdComponent } from './compnents2/products-by-ret-id/products-by-ret-id.component';
import { CustomerproductsComponent } from './component2/customerproducts/customerproducts.component';
import { CheckoutComponent } from './components/shopping-cart/checkout/checkout.component';
import { PaySuccessComponent } from './components/pay-success/pay-success.component';
import { FilterPipe } from './components/shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    CartComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    HomepageComponent,
    CarthomeComponent,
    CustomerdashboardComponent,
    CustomerloginComponent,
    CustomerregistraionComponent,
    RetailerdashboardComponent,
    RetailerregistrationComponent,
    RetailerloginComponent,
    AdminloginComponent,
    UpdateprofileComponent,
    ViewproductsComponent,
    ViewAllRetailersComponent,
    AdminviewsComponent,
    RetailerviewComponent,
    AddProductsByRetailerComponent,
    ProductsByRetIdComponent,
    CustomerproductsComponent,
    CheckoutComponent,
    PaySuccessComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
