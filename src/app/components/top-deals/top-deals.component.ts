import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.css']
})
export class TopDealsComponent implements OnInit {
  

  topDealProducts: any[] =[]

  ngOnInit(): void {
    this.topDealProducts = [
      {
        imageUrl: 'assets/images/hot-deals/p14.jpg',
        productName: 'Product 1',
        description: 'Description for Product 1',
        price: 19.99,
      },
      {
        imageUrl: 'assets/images/hot-deals/p18.jpg',
        productName: 'Product 2',
        description: 'Description for Product 2',
        price: 29.99,
      },
      {
        imageUrl: 'assets/images/hot-deals/p17.jpg',
        productName: 'Product 3',
        description: 'Description for Product 3',
        price: 39.99,
      },
      {
        imageUrl: 'assets/images/hot-deals/p13.jpg',
        productName: 'Product 4',
        description: 'Description for Product 4',
        price: 49.99,
      },
    ];
  }
  
}
