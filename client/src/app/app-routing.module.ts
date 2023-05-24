import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';
import { CartComponent } from './component/cart/cart.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentDetailsComponent } from './admin/payment-details/payment-details.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashComponent } from './component/dash/dash.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path:'all-users',component:AllUsersComponent},
  {path:'addtocart',component:CartComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'payment',component:PaymentComponent},
  {path:'payment-details',component:PaymentDetailsComponent},
  {path:'admin/dashboard',component:DashboardComponent},
  {path:'dash',component:DashComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:NavbarComponent},
  {path:'productlist',component:ProductlistComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
