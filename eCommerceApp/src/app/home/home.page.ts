import { Component, HostListener, OnInit } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { DataService } from 'src/services/data.service';
import { product } from 'src/models/product.model';
import { shoppingItem } from 'src/models/shoppingItem.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  product!: product;
  smallScreen: boolean = false;
  productAmount: number = 0;
  constructor(
    private dataService: DataService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.product = this.dataService.getProduct();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    if (width < 860) {
      this.modalController.getTop().then((modal) => {
        if (modal) {
          this.modalController.dismiss();
        }
      });
      this.smallScreen = true;
    } else {
      this.smallScreen = false;
    }
  }

  async openLightbox() {
    const modalOptions: ModalOptions = {
      component: ImageSliderComponent,
      componentProps: { images: this.product.productImages },
      cssClass: 'fit-modal',
    };
    if (!this.smallScreen) {
      const modalEl = await this.modalController.create(modalOptions);
      await modalEl.present();
    }
  }

  incrementAmount() {
    this.productAmount++;
  }

  decrementAmount() {
    this.productAmount =
      this.productAmount == 0 ? this.productAmount : this.productAmount - 1;
  }

  addToCart() {
    const cartItem: shoppingItem = {
      itemName: this.product.productName,
      thumbnail: this.product.productImages[0],
      count: this.productAmount > 0 ? this.productAmount : 1,
      price: this.product.priceAfterDiscount,
    };
    this.dataService.addCartItems(cartItem);
  }
}
