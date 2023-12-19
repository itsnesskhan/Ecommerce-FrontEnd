import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public cartItems: any[] = [];

  constructor() {
    const dummyProduct = {
      id: 1,
      imageUrl: 'assets/images/products/wt1/wt1.avif',
      productName: 'Dummy Product 1',
      description: 'This is a dummy product for testing purposes.',
      price: 24.99,
    };

    const dummyProduct2 = {
      id: 2,
      imageUrl: 'assets/images/products/wt4/wt1.avif',
      productName: 'Dummy Product 2',
      description: 'Another dummy product for testing purposes.',
      price: 34.99,
    };

    this.addItemToCart(dummyProduct, 2);
    this.addItemToCart(dummyProduct2, 1);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  addItemToCart(product: any, quantity: number): void {
    const existingItem = this.cartItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
  }

  increaseQuantity(item: any): void {
    item.quantity++;
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItemFromCart(item);
    }
  }

  removeItemFromCart(item: any): void {
    const itemIndex = this.cartItems.indexOf(item);
    if (itemIndex !== -1) {
      this.cartItems.splice(itemIndex, 1);
    }
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  
  checkout(): void {
    // Implement your checkout logic here
    // For example, you can navigate to a checkout page or display a confirmation message.
    alert('Checkout functionality will be implemented here.');
  }
}
