import { Component } from '@angular/core';
import { PropertyCard, PropertyCardComponent } from '../../shared/property-card/property-card';

@Component({
  selector: 'app-destinations',
  imports: [PropertyCardComponent],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class Destinations {}
