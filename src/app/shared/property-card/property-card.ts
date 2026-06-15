import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface PropertyCard {
  id: number;
  image: string;
  price: number;
  type: string;
  title: string;
  rating: number;
  slug: string;
  reviewCount: number;
  description: string;
  isFavorite?: boolean;
}

@Component({
  selector: 'app-property-card',
  imports: [RouterLink],
  templateUrl: './property-card.html',
  styleUrl: './property-card.css',
})
export class PropertyCardComponent {
  @Input() property!: PropertyCard;
  @Input() compact = false;

  readonly stars = [0, 1, 2, 3, 4];

  toggleFavorite(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    if (this.property) {
      this.property.isFavorite = !this.property.isFavorite;
    }
  }
}
