import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar';
import { FooterComponent } from '../shared/footer/footer';
import { PropertyGalleryComponent } from './property-gallery/property-gallery';
import { PropertyBookingCardComponent } from './property-booking-card/property-booking-card';
import { PropertyTabsComponent } from './property-tabs/property-tabs';
import { PropertyHostComponent } from './property-host/property-host';
import { PropertyAmenitiesComponent } from './property-amenities/property-amenities';
import {
  RealEstateHttpClientServices,
  RealEstate,
} from '../services/realEstate/real-estate-http-client-services';

@Component({
  selector: 'app-property-detail',
  imports: [
    NavbarComponent,
    FooterComponent,
    PropertyGalleryComponent,
    PropertyBookingCardComponent,
    PropertyTabsComponent,
    PropertyHostComponent,
    PropertyAmenitiesComponent,
  ],
  templateUrl: './property-detail.html',
  styleUrl: './property-detail.css',
})
export class PropertyDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private realEstateService = inject(RealEstateHttpClientServices);

  logement = signal<RealEstate | null>(null);
  chargement = signal<boolean>(true);
  erreur = signal<string | null>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.chargerLogement(slug);
  }

  private chargerLogement(slug: string): void {
    this.realEstateService.getPropertyDetail(slug).subscribe({
      next: (res) => {
        this.logement.set(res.data);
        this.chargement.set(false);
      },
      error: () => {
        this.erreur.set('Logement introuvable');
        this.chargement.set(false);
      },
    });
  }
}
