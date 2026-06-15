import { Component, OnInit, ViewChild, ElementRef, signal } from '@angular/core';
import { PropertyCardComponent, PropertyCard } from '../../shared/property-card/property-card';
import {
  RealEstateHttpClientServices,
  RealEstate,
} from '../../services/realEstate/real-estate-http-client-services';

@Component({
  selector: 'app-coup-de-coeur',
  imports: [PropertyCardComponent],
  templateUrl: './coup-de-coeur.html',
  styleUrl: './coup-de-coeur.css',
})
export class CoupDeCoeurComponent implements OnInit {
  @ViewChild('track') track!: ElementRef<HTMLDivElement>;

  private realEstateService = new RealEstateHttpClientServices();

  logements = signal<RealEstate[]>([]);
  chargement = signal<boolean>(true);

  get properties(): PropertyCard[] {
    return this.logements().map((l) => ({
      id: l.id,
      slug: l.slug,
      image: l.image ?? `https://picsum.photos/400/300?random=${l.id}`,
      price: l.price,
      type: l.type ?? l.categorie?.title ?? 'Logement',
      title: l.title,
      rating: 4,
      reviewCount: l.likes ?? 0,
      description: l.description,
      isFavorite: l.is_coup_de_coeur,
    }));
  }

  ngOnInit(): void {
    this.realEstateService.getCoupDeCoeur(6).subscribe({
      next: (res) => {
        this.logements.set(res.data ?? []);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });
  }

  scrollLeft() {
    this.track?.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }
  scrollRight() {
    this.track?.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
