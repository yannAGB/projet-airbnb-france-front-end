import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent, PropertyCard } from '../../../shared/property-card/property-card';
import { MapComponent } from '../map/map';

@Component({
  selector: 'app-property-grid',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent, MapComponent],
  templateUrl: './property-grid.html',
  styleUrl: './property-grid.css',
})
export class PropertyGridComponent {
  properties: PropertyCard[] = [
    {
      id: 1,
      image: 'https://picsum.photos/400/300?random=1',
      price: 49,
      type: 'Studio',
      title: 'Studio vue mer',
      rating: 4,
      reviewCount: 28,
      description: 'Appartement moderne au cœur de la ville avec vue dégagée.',
    },
    {
      id: 2,
      image: 'https://picsum.photos/400/300?random=2',
      price: 69,
      type: 'Studio',
      title: 'Studio cosy centre',
      rating: 4,
      reviewCount: 15,
      description: 'Studio entièrement équipé proche des transports.',
    },
    {
      id: 3,
      image: 'https://picsum.photos/400/300?random=3',
      price: 18,
      type: 'Studio',
      title: 'Studio lumineux',
      rating: 3,
      reviewCount: 9,
      description: 'Petit studio calme idéal pour un voyage solo.',
    },
    {
      id: 4,
      image: 'https://picsum.photos/400/300?random=4',
      price: 48,
      type: 'Villa',
      title: 'Villa avec piscine',
      rating: 5,
      reviewCount: 42,
      description: 'Villa luxueuse avec piscine privée et jardin.',
    },
    {
      id: 5,
      image: 'https://picsum.photos/400/300?random=5',
      price: 36,
      type: 'Maison',
      title: 'Maison familiale',
      rating: 4,
      reviewCount: 22,
      description: 'Grande maison idéale pour les familles, calme.',
    },
    {
      id: 6,
      image: 'https://picsum.photos/400/300?random=6',
      price: 60,
      type: 'Loft',
      title: 'Loft industriel chic',
      rating: 5,
      reviewCount: 37,
      description: 'Loft spacieux au style industriel, tout équipé.',
    },
  ];
}
