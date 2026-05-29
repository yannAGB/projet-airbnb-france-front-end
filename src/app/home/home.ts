import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar';
import { FooterComponent } from '../shared/footer/footer';
import { HeroComponent } from './hero/hero';
import { CategoryFilterComponent } from './category-filter/category-filter';
import { PropertyGridComponent } from './property-grid/property-grid';
import { CoupDeCoeurComponent } from './coup-de-coeur/coup-de-coeur';
import { DestinationsComponent } from './destinations/destinations';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    CategoryFilterComponent,
    PropertyGridComponent,
    CoupDeCoeurComponent,
    DestinationsComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
