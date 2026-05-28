import { Component } from '@angular/core';
import { PropertyCard } from '../property-card/property-card';

@Component({
  selector: 'app-popular-section',
  imports: [PropertyCard],
  templateUrl: './popular-section.html',
  styleUrl: './popular-section.css',
})
export class PopularSection {}
