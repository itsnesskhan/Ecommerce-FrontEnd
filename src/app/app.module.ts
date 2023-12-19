import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BlogComponent } from './components/blog/blog.component';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopWearComponent } from './components/top-wear/top-wear.component';
import { ProductWigetComponent } from './components/product-wiget/product-wiget.component';
import { WomenWearComponent } from './components/women-wear/women-wear.component';
import { HomeComponent } from './components/home/home.component';
import { MenAllComponent } from './components/men-all/men-all.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './components/men-all/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CategoriesComponent,
    BlogComponent,
    TopDealsComponent,
    FooterComponent,
    TopWearComponent,
    ProductWigetComponent,
    WomenWearComponent,
    HomeComponent,
    MenAllComponent,
    SignupComponent,
    LoginComponent,
    ProductDetailsComponent,
    CartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
