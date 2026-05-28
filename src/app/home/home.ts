import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar';
import { HeroComponent } from './hero/hero';
import { CategoryFilterComponent } from './category-filter/category-filter';
import { PropertyGridComponent } from './property-grid/property-grid';
import { CoupDeCoeurComponent } from './coup-de-coeur/coup-de-coeur';
import { DestinationsComponent } from './destinations/destinations';
import { FooterComponent } from '../shared/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    CategoryFilterComponent,
    PropertyGridComponent,
    CoupDeCoeurComponent,
    DestinationsComponent,
    FooterComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
