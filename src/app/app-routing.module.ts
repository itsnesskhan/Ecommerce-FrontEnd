import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenAllComponent } from './components/men-all/men-all.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductDetailsComponent } from './components/men-all/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'mens-wear', component: MenAllComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'product/details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
