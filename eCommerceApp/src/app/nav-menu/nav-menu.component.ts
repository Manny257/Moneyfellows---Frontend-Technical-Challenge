import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  openCart: boolean = false;
  sideMenuOpen: boolean = false;
  cartItemsCount: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.cartItems.subscribe((item) => {
      this.cartItemsCount = item?.count ? item.count : 0;
    });
  }

  openCloseCart() {
    this.openCart = !this.openCart;
  }

  openCloseMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }
}
