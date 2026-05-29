import { Component } from '@angular/core';
import { PropertyCardComponent, PropertyCard } from '../../shared/property-card/property-card';
import { MapComponent } from '../map/map';

@Component({
  selector: 'app-property-grid',
  imports: [PropertyCardComponent, MapComponent],
  templateUrl: './property-grid.html',
  styleUrl: './property-grid.css',
})
export class PropertyGridComponent {
  readonly properties: PropertyCard[] = [
    {
      id: 1,
      image: 'https://picsum.photos/400/300?random=11',
      price: 49,
      type: 'Studio',
      title: 'Studio Vue Mer',
      rating: 4,
      reviewCount: 28,
      description: 'Appartement moderne avec vue dégagée sur la mer.',
    },
    {
      id: 2,
      image: 'https://picsum.photos/400/300?random=12',
      price: 69,
      type: 'Studio',
      title: 'Studio Cosy Centre',
      rating: 4,
      reviewCount: 15,
      description: 'Studio entièrement équipé proche des transports.',
    },
    {
      id: 3,
      image: 'https://picsum.photos/400/300?random=13',
      price: 18,
      type: 'Studio',
      title: 'Studio Lumineux',
      rating: 3,
      reviewCount: 9,
      description: 'Petit studio calme idéal pour un voyage solo.',
    },
    {
      id: 4,
      image: 'https://picsum.photos/400/300?random=14',
      price: 48,
      type: 'Villa',
      title: 'Villa avec Piscine',
      rating: 5,
      reviewCount: 42,
      description: 'Villa luxueuse avec piscine privée et jardin.',
    },
    {
      id: 5,
      image: 'https://picsum.photos/400/300?random=15',
      price: 36,
      type: 'Maison',
      title: 'Maison Familiale',
      rating: 4,
      reviewCount: 22,
      description: 'Grande maison idéale pour les familles, très calme.',
    },
    {
      id: 6,
      image: 'https://picsum.photos/400/300?random=16',
      price: 60,
      type: 'Loft',
      title: 'Loft Industriel Chic',
      rating: 5,
      reviewCount: 37,
      description: 'Loft spacieux au style industriel, tout équipé.',
    },
  ];
}
