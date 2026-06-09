import { Component, Input } from '@angular/core';
import { PropertyHote } from '../../services/realEstate/real-estate-http-client-services';

@Component({
  selector: 'app-property-host',
  templateUrl: './property-host.html',
  styleUrl: './property-host.css',
})
export class PropertyHostComponent {
  @Input() hote: PropertyHote | null = null;
}
