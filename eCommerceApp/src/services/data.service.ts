import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from 'src/models/product.model';
import { shoppingItem } from 'src/models/shoppingItem.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  myProduct: product = {
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

  cartItems = new BehaviorSubject<shoppingItem | null>(this.getCartItems());

  getCartItems() {
    const Item = localStorage.getItem('cartItems');
    if (Item) return JSON.parse(Item);
  }
  getProduct() {
    return this.myProduct;
  }

  addCartItems(item: shoppingItem) {
    localStorage.setItem('cartItems', JSON.stringify(item));
    this.cartItems.next(item);
  }

  removeCartItems() {
    localStorage.removeItem('cartItems');
    this.cartItems.next(null);
  }
}
