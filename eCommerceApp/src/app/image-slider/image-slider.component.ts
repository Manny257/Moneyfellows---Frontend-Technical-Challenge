import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @Input() images: string[] = [];
  @Output() mainImageClicked = new EventEmitter();

  mainImage = '';

  constructor() {}

  ngOnInit() {
    this.mainImage = this.images[0];
  }
  thumbnailClicked(img: string) {
    this.mainImage = img;
  }

  showPreviousImg() {
    let currentIndex = this.images.indexOf(this.mainImage);
    this.mainImage =
      currentIndex > 0
        ? this.images[currentIndex - 1]
        : this.images[this.images.length - 1];
  }

  showNextImg() {
    let currentIndex = this.images.indexOf(this.mainImage);
    this.mainImage =
      currentIndex < this.images.length - 1
        ? this.images[currentIndex + 1]
        : this.images[0];
  }

  mainImgClicked() {
    this.mainImageClicked.emit();
  }
}
