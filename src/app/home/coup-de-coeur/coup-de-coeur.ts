import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent, PropertyCard } from '../../shared/property-card/property-card';

@Component({
  selector: 'app-coup-de-coeur',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent],
  templateUrl: './coup-de-coeur.html',
  styleUrl: './coup-de-coeur.css',
})
export class CoupDeCoeurComponent {
  @ViewChild('track') track!: ElementRef;

  scrollLeft() {
    this.track.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  }
  scrollRight() {
    this.track.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  }

  properties: PropertyCard[] = [
    {
      id: 7,
      image: 'https://picsum.photos/400/300?random=7',
      price: 69,
      type: 'Studio',
      title: 'Studio Belle Vue',
      rating: 5,
      reviewCount: 19,
      description: 'Studio avec vue panoramique sur la ville.',
      isFavorite: true,
    },
    {
      id: 8,
      image: 'https://picsum.photos/400/300?random=8',
      price: 80,
      type: 'Studio',
      title: 'Studio Centre-Ville',
      rating: 4,
      reviewCount: 34,
      description: 'Au cœur du centre, commerces à pied.',
    },
    {
      id: 9,
      image: 'https://picsum.photos/400/300?random=9',
      price: 45,
      type: 'Hôtel',
      title: 'Hôtel Boutique',
      rating: 4,
      reviewCount: 21,
      description: 'Petit hôtel au charme unique.',
    },
    {
      id: 10,
      image: 'https://picsum.photos/400/300?random=10',
      price: 26,
      type: 'Terrain',
      title: 'Terrain Bucolique',
      rating: 3,
      reviewCount: 8,
      description: 'Terrain calme en pleine nature.',
    },
    {
      id: 11,
      image: 'https://picsum.photos/400/300?random=11',
      price: 55,
      type: 'Maison',
      title: 'Maison de vacances',
      rating: 5,
      reviewCount: 45,
      description: 'Maison tout confort, grand jardin.',
    },
  ];
}
