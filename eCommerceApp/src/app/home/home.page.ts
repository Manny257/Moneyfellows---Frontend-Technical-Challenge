import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  product = {
    manufacturer: 'Sneakers Company',
    productName: 'Fall Limited Edition Sneakers',
    details:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything weather offer.",
    productImages: [
      'assets/images/image-product-1.jpg',
      'assets/images/image-product-2.jpg',
      'assets/images/image-product-3.jpg',
      'assets/images/image-product-4.jpg',
    ],
    originalPrice: 250,
    discount: 0.5,
    priceAfterDiscount: 125,
  };
  productAmount: number = 0;
  constructor() {}

  ngOnInit() {
    console.log('hi');
  }

  openLightbox() {
    console.log('img clicked');
  }

  incrementAmount() {
    this.productAmount++;
  }

  decrementAmount() {
    this.productAmount--;
  }
}
