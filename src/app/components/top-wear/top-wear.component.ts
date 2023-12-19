import { Component } from '@angular/core';

@Component({
  selector: 'top-wear',
  templateUrl: './top-wear.component.html',
  styleUrls: ['./top-wear.component.css']
})
export class TopWearComponent {

  menTopWearProducts: any[] = [];


  ngOnInit(): void {
    // Dummy array of men's top wear products
    this.menTopWearProducts = [
      {
        imageUrl: 'assets/images/products/mt1/mt1.jpg',
        productName: 'Casual T-Shirt',
        description: 'Comfortable cotton t-shirt for everyday wear.',
        price: 19.99
      },
      {
        imageUrl: 'assets/images/products/mt3/mt1.jpg',
        productName: 'Formal Shirt',
        description: 'Stylish formal shirt for business occasions.',
        price: 29.99
      },
      {
        imageUrl: 'assets/images/products/mt2/mt1.jpg',
        productName: 'Hooded Sweatshirt',
        description: 'Warm and cozy sweatshirt with a hood.',
        price: 39.99
      },
      {
        imageUrl: 'assets/images/products/mt4/mt1.jpg',
        productName: 'Formal Shirt',
        description: 'Stylish formal shirt for business occasions.',
        price: 29.99
      },
      // {
      //   imageUrl: 'assets/images/products/men5.jpg',
      //   productName: 'Casual T-Shirt',
      //   description: 'Comfortable cotton t-shirt for everyday wear.',
      //   price: 19.99
      // },
      // {
      //   imageUrl: 'assets/images/products/men6.jpg',
      //   productName: 'Casual T-Shirt',
      //   description: 'Comfortable cotton t-shirt for everyday wear.',
      //   price: 19.99
      // }
    ];
  }
}
