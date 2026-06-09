import { Component, Input } from '@angular/core';

const ICONES_AMENITES: Record<string, string> = {
  'Piscine privée': 'bi-water',
  'Wi-Fi gratuit': 'bi-wifi',
  Climatisation: 'bi-thermometer-snow',
  Jacuzzi: 'bi-droplet-fill',
  Barbecue: 'bi-fire',
  'Parking gratuit': 'bi-car-front-fill',
  Jardin: 'bi-tree-fill',
  Terrasse: 'bi-sun-fill',
  'Vue mer': 'bi-binoculars-fill',
  'Machine à laver': 'bi-asterisk',
  'Jardin avec des hamacs': 'bi-tree-fill',
  'Spa / Jacuzzi': 'bi-droplet-fill',
};

@Component({
  selector: 'app-property-amenities',
  templateUrl: './property-amenities.html',
  styleUrl: './property-amenities.css',
})
export class PropertyAmenitiesComponent {
  @Input() amenities: string[] = [];

  icone(amenite: string): string {
    return ICONES_AMENITES[amenite] ?? 'bi-check-circle-fill';
  }
}
