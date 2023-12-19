import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {


  selectedProductId!: string;
  selectedProduct: any; 
  selectedSize!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedProductId = params['id'];
      
      this.selectedProduct = this.getDummyProductDetails();
      console.log(this.selectedProduct)
    });
  }


  activeImageIndex: number = 0; // Track the active image index

  // ... your existing component code

  prevImage() {
    this.activeImageIndex = (this.activeImageIndex - 1 + this.selectedProduct.images.length) % this.selectedProduct.images.length;
  }

  nextImage() {
    this.activeImageIndex = (this.activeImageIndex + 1) % this.selectedProduct.images.length;
  }

  getDummyProductDetails() {
    return {
      id: this.selectedProductId,
      productName: 'Elegant Floral Print Kurta',
      description: `Experience the charm of our Elegant Floral Print Kurta. This kurta features a delightful floral print, making it a perfect choice for both casual and special occasions. Crafted with care and attention to detail, it offers comfort and style in every wear.`,
      price: 34.99,
      images: ['assets/images/products/wt1/wt1.avif','assets/images/products/wt1/wt2.avif','assets/images/products/wt1/wt5.avif','assets/images/products/wt1/wt3.avif','assets/images/products/wt1/wt4.avif'] 
    };
  }

   // Calculate the discount amount based on your logic
   calculateDiscountAmount(): number {
    // Replace this with your actual logic to calculate the discount amount
    // For example, you can subtract the discounted price from the original price
    return (this.selectedProduct.price * 0.2); // Assuming a 20% discount
  }
  

 

  // Update your addToCart and buyNow methods to include the selectedSize parameter
  addToCart(product:any, size: string) {
    // Your implementation here
  }
  
  buyNow(product: any, size: string) {
    // Your implementation here
  }

}
