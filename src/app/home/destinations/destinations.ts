import { Component } from '@angular/core';
import { PropertyCardComponent, PropertyCard } from '../../shared/property-card/property-card';

@Component({
  selector: 'app-destinations',
  imports: [PropertyCardComponent],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class DestinationsComponent {
  readonly properties: PropertyCard[] = [
    {
      id: 13,
      image: 'https://picsum.photos/400/300?random=23',
      price: 69,
      type: 'Studio',
      title: 'Studio Paris 11e',
      rating: 5,
      reviewCount: 31,
      description: 'Au cœur de la capitale, proche de tout.',
    },
    {
      id: 14,
      image: 'https://picsum.photos/400/300?random=24',
      price: 89,
      type: 'Villa',
      title: "Villa Côte d'Azur",
      rating: 4,
      reviewCount: 18,
      description: 'Vue mer exceptionnelle, piscine privée.',
    },
    {
      id: 15,
      image: 'https://picsum.photos/400/300?random=25',
      price: 59,
      type: 'Loft',
      title: 'Loft Lyon Confluence',
      rating: 4,
      reviewCount: 24,
      description: 'Loft moderne en plein quartier branché.',
    },
    {
      id: 16,
      image: 'https://picsum.photos/400/300?random=26',
      price: 48,
      type: 'Maison',
      title: 'Mas Provençal',
      rating: 5,
      reviewCount: 40,
      description: 'Mas typique avec piscine et jardin fleuri.',
    },
    {
      id: 17,
      image: 'https://picsum.photos/400/300?random=27',
      price: 38,
      type: 'Studio',
      title: 'Studio Bordeaux',
      rating: 4,
      reviewCount: 12,
      description: 'Proche du centre historique et des vignobles.',
    },
  ];
}
