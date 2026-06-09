import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-property-gallery',
  templateUrl: './property-gallery.html',
  styleUrl: './property-gallery.css',
})
export class PropertyGalleryComponent {
  @Input() images: string[] = [];

  imageActive = signal<number>(0);

  get mainImage(): string {
    return this.images[this.imageActive()] ?? 'https://picsum.photos/800/500';
  }

  get thumbnails(): string[] {
    return this.images.slice(1, 5);
  }

  selectionner(index: number): void {
    this.imageActive.set(index);
  }
}
