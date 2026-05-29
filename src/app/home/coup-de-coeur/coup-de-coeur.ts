import { Component, ViewChild, ElementRef } from '@angular/core';
import { PropertyCardComponent, PropertyCard } from '../../shared/property-card/property-card';

@Component({
  selector: 'app-coup-de-coeur',
  imports: [PropertyCardComponent],
  templateUrl: './coup-de-coeur.html',
  styleUrl: './coup-de-coeur.css',
})
export class CoupDeCoeurComponent {
  @ViewChild('track') track!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    this.track.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }
  scrollRight() {
    this.track.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  readonly properties: PropertyCard[] = [
    {
      id: 7,
      image: 'https://picsum.photos/400/300?random=17',
      price: 69,
      type: 'Studio',
      title: 'Studio Belle Vue',
      rating: 5,
      reviewCount: 19,
      description: 'Vue panoramique sur la ville depuis le toit.',
      isFavorite: true,
    },
    {
      id: 8,
      image: 'https://picsum.photos/400/300?random=18',
      price: 80,
      type: 'Studio',
      title: 'Studio Centre-Ville',
      rating: 4,
      reviewCount: 34,
      description: 'Au cœur du centre, tous commerces à pied.',
    },
    {
      id: 9,
      image: 'https://picsum.photos/400/300?random=19',
      price: 45,
      type: 'Hôtel',
      title: 'Hôtel Boutique',
      rating: 4,
      reviewCount: 21,
      description: 'Petit hôtel au charme unique et personnel.',
    },
    {
      id: 10,
      image: 'https://picsum.photos/400/300?random=20',
      price: 26,
      type: 'Terrain',
      title: 'Terrain Bucolique',
      rating: 3,
      reviewCount: 8,
      description: 'Terrain calme en pleine nature préservée.',
    },
    {
      id: 11,
      image: 'https://picsum.photos/400/300?random=21',
      price: 55,
      type: 'Maison',
      title: 'Maison de Vacances',
      rating: 5,
      reviewCount: 45,
      description: 'Maison tout confort avec grand jardin arboré.',
    },
    {
      id: 12,
      image: 'https://picsum.photos/400/300?random=22',
      price: 95,
      type: 'Villa',
      title: 'Villa Prestige',
      rating: 5,
      reviewCount: 62,
      description: 'Villa de standing avec piscine et tennis.',
    },
  ];
}
