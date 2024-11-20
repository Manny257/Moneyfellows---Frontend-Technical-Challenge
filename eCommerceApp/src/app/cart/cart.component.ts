import { Component, Input, OnInit } from '@angular/core';
import { shoppingItem } from 'src/models/shoppingItem.model';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() cartItem: shoppingItem | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.cartItems.subscribe((item) => {
      this.cartItem = item;
    });
  }

  emptyCart() {
    this.cartItem = null;
  }
}
