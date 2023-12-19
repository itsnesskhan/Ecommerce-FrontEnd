import { Component } from '@angular/core';

@Component({
  selector: 'women-wear',
  templateUrl: './women-wear.component.html',
  styleUrls: ['./women-wear.component.css']
})
export class WomenWearComponent {

  womenWearProducts: any[] = [];

  ngOnInit(): void {
    // Dummy array of women's wear products
    this.womenWearProducts = [
      {
        imageUrl: 'assets/images/products/p1.jpg',
        productName: 'Summer Dress',
        description: 'Light and stylish dress for the summer season.',
        price: 39.99
      },
      {
        imageUrl: 'assets/images/products/p2.jpg',
        productName: 'Jeans and T-Shirt Combo',
        description: 'Casual combo for everyday wear.',
        price: 49.99
      },
      // {
      //   imageUrl: 'assets/images/products/p3.jpg',
      //   productName: 'Formal Blouse',
      //   description: 'Elegant blouse for formal occasions.',
      //   price: 29.99
      // },
      {
        imageUrl: 'assets/images/products/p4.jpg',
        productName: 'Athletic Leggings',
        description: 'Stretchy and comfortable leggings for workouts.',
        price: 24.99
      },
      {
        imageUrl: 'assets/images/products/p5.jpg',
        productName: 'Winter Coat',
        description: 'Warm and stylish coat for the winter season.',
        price: 79.99
      },
      // {
      //   imageUrl: 'assets/images/products/p6.jpg',
      //   productName: 'Maxi Skirt',
      //   description: 'Flowy maxi skirt for a bohemian look.',
      //   price: 34.99
      // },
      // Add more products as needed
    ];
  }
}
