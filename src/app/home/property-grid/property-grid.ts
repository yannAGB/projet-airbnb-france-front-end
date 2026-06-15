import { Component, OnInit, signal } from '@angular/core';
import { PropertyCardComponent, PropertyCard } from '../../shared/property-card/property-card';
import { MapComponent } from '../map/map';
import {
  RealEstateHttpClientServices,
  RealEstate,
} from '../../services/realEstate/real-estate-http-client-services';

@Component({
  selector: 'app-property-grid',
  imports: [PropertyCardComponent, MapComponent],
  templateUrl: './property-grid.html',
  styleUrl: './property-grid.css',
})
export class PropertyGridComponent implements OnInit {
  private realEstateService = new RealEstateHttpClientServices();

  logements = signal<RealEstate[]>([]);
  chargement = signal<boolean>(true);
  erreur = signal<string | null>(null);

  /* Conversion des données API en PropertyCard */
  get properties(): PropertyCard[] {
    return this.logements().map((l) => this.versPropertyCard(l));
  }

  ngOnInit(): void {
    this.realEstateService.getRealEstatesHome(6).subscribe({
      next: (res) => {
        this.logements.set(res.data ?? []);
        this.chargement.set(false);
      },
      error: (err) => {
        console.error('Erreur logements :', err);
        this.erreur.set('Impossible de charger les logements');
        this.chargement.set(false);
      },
    });
  }

  private versPropertyCard(logement: RealEstate): PropertyCard {
    return {
      id: logement.id,
      slug: logement.slug,
      image: logement.image ?? 'https://picsum.photos/400/300?random=' + logement.id,
      price: logement.price,
      type: logement.type ?? logement.categorie?.title ?? 'Logement',
      title: logement.title,
      rating: 4,
      reviewCount: logement.likes ?? 0,
      description: logement.description,
    };
  }
}
