import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'men-all',
  templateUrl: './men-all.component.html',
  styleUrls: ['./men-all.component.css']
})
export class MenAllComponent {

  menAll: any[] = [];
  womenAll: any[] = [];

  addToCart(product: any) {
    // Implement your logic to add the product to the cart
    console.log('Product added to cart:', product);
  }
  buyNow(product: any) {
    // Implement your logic to handle "Buy Now" action
    console.log('Buy Now clicked for product:', product);
  }

  ngOnInit(): void {
    // Dummy array of men's top wear products
    this.menAll = [
      {
        id: 1,
        imageUrl: 'assets/images/products/mt1/mt1.jpg',
        productName: 'Casual T-Shirt',
        description: 'Comfortable cotton t-shirt for everyday wear.',
        price: 19.99
      },
      {
        id: 2,
        imageUrl: 'assets/images/products/mt2/mt1.jpg',
        productName: 'Formal Shirt',
        description: 'Stylish formal shirt for business occasions.',
        price: 29.99
      },
      {
        id: 3,
        imageUrl: 'assets/images/products/mt3/mt1.jpg',
        productName: 'Hooded Sweatshirt',
        description: 'Warm and cozy sweatshirt with a hood.',
        price: 39.99
      },
      {
        id: 8,
        imageUrl: 'assets/images/products/mb3/mb1.webp',
        productName: 'Casual T-Shirt',
        description: 'Comfortable cotton t-shirt for everyday wear.',
        price: 19.99
      },
      {
        id: 4,
        imageUrl: 'assets/images/products/mt4/mt1.jpg',
        productName: 'Classic Blue Jeans',
        description: 'Classic blue jeans that never go out of style.',
        price: 39.99
      },
      {
        id: 5,
        imageUrl: 'assets/images/products/mt5/mt1.jpg',
        productName: 'Formal Shirt',
        description: 'Stylish formal shirt for business occasions.',
        price: 29.99
      },
      {
        id: 6,
        imageUrl: 'assets/images/products/mb1/mb1.webp',
        productName: 'Casual T-Shirt',
        description: 'Comfortable cotton t-shirt for everyday wear.',
        price: 19.99
      },
       
      {
        id: 7,
        imageUrl: 'assets/images/products/mb2/mb1.webp',
        productName: 'Slim Fit Jeans',
        description: 'Comfortable and stylish slim fit jeans for a modern look.',
        price: 49.99
      },
      
     
    ];

    this.womenAll = [
      {
        id: 13,
        imageUrl: 'assets/images/products/wt1/wt1.avif',
        productName: 'Casual T-Shirt',
        description: 'Comfortable cotton t-shirt for everyday wear.',
        price: 19.99
      },
      {
        id: 14,
        imageUrl: 'assets/images/products/wt2/wt1.avif',
        productName: 'Summer Dress',
        description: 'Light and breezy dress for the summer season.',
        price: 29.99
      },
      {
        id: 19,
        imageUrl: 'assets/images/products/wb4/wb1.jpg',
        productName: 'Denim Jacket',
        description: 'Classic denim jacket for a trendy look.',
        price: 49.99
      },
      {
        id: 15,
        imageUrl: 'assets/images/products/wt3/wt1.avif',
        productName: 'Casual T-Shirt',
        description: 'Comfortable cotton t-shirt for everyday wear.',
        price: 19.99
      },
      {
        id: 16,
        imageUrl: 'assets/images/products/wt4/wt1.avif',
        productName: 'Casual Blouse',
        description: 'Elegant and comfortable blouse for casual occasions.',
        price: 24.99
      },
      {
        id: 17,
        imageUrl: 'assets/images/products/wt5/wt1.avif',
        productName: 'Skinny Jeans',
        description: 'Fashionable skinny jeans for a modern silhouette.',
        price: 34.99
      },
      {
        id: 18,
        imageUrl: 'assets/images/products/wt6/wt1.avif',
        productName: 'Denim Jacket',
        description: 'Classic denim jacket for a trendy look.',
        price: 49.99
      },
      {
        id: 19,
        imageUrl: 'assets/images/products/wt7/wt1.avif',
        productName: 'Denim Jacket',
        description: 'Classic denim jacket for a trendy look.',
        price: 49.99
      },
      {
        id: 20,
        imageUrl: 'assets/images/products/wb1/wb1.jpg',
        productName: 'Formal Dress',
        description: 'Stylish formal dress for special events.',
        price: 39.99
      },
      {
        id: 21,
        imageUrl: 'assets/images/products/wb3/wb1.jpg',
        productName: 'Denim Jacket',
        description: 'Classic denim jacket for a trendy look.',
        price: 49.99
      },
      
      
      
      // Add more women's products as needed
    ];
    

  }
}
