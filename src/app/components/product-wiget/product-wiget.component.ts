import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-wiget',
  templateUrl: './product-wiget.component.html',
  styleUrls: ['./product-wiget.component.css']
})
export class ProductWigetComponent {

  @Input() product: any;

  @Input() showButtons: boolean = true;
  @Output() addToCartClick = new EventEmitter<any>();
  @Output() buyNowClick = new EventEmitter<any>();

  constructor(private route:Router){}

  
  addToCart(product: any) {
    this.addToCartClick.emit(product);
  }

  buyNow(product: any) {
    this.buyNowClick.emit(product);
  }

 

  viewProductDetails(productId: string) {
    this.route.navigate(['product/details', productId])
  }

}
