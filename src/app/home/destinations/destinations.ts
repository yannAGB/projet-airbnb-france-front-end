import { Component, OnInit, signal } from '@angular/core';
import { PropertyCardComponent, PropertyCard } from '../../shared/property-card/property-card';
import {
  RealEstateHttpClientServices,
  RealEstate,
} from '../../services/realEstate/real-estate-http-client-services';

@Component({
  selector: 'app-destinations',
  imports: [PropertyCardComponent],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class DestinationsComponent implements OnInit {
  private realEstateService = new RealEstateHttpClientServices();

  logements = signal<RealEstate[]>([]);
  chargement = signal<boolean>(true);

  get properties(): PropertyCard[] {
    return this.logements().map((l) => ({
      id: l.id,
      slug: l.slug,
      image: l.image ?? `https://picsum.photos/400/300?random=${l.id + 50}`,
      price: l.price,
      type: l.type ?? l.categorie?.title ?? 'Logement',
      title: l.title,
      rating: 4,
      reviewCount: l.likes ?? 0,
      description: l.description,
    }));
  }

  ngOnInit(): void {
    this.realEstateService.getDestinations(5).subscribe({
      next: (res) => {
        this.logements.set(res.data ?? []);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });
  }
}
