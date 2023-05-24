import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'; 
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';
import { CartComponent } from './component/cart/cart.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentDetailsComponent } from './admin/payment-details/payment-details.component';
import { DashComponent } from './component/dash/dash.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { HeaderComponent } from './admin/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    AddProductComponent,
    NavbarComponent,
    AllUsersComponent,
    ProductlistComponent,
    CartComponent,
    PaymentComponent,
    PaymentDetailsComponent,
    DashComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
