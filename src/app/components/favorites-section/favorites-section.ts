import { Component } from '@angular/core';
import { PropertyCard } from '../property-card/property-card';

@Component({
  selector: 'app-favorites-section',
  imports: [PropertyCard],
  templateUrl: './favorites-section.html',
  styleUrl: './favorites-section.css',
})
export class FavoritesSection {}
