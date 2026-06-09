import { Component, Input, signal, inject } from '@angular/core';
import {
  PropertyReview,
  RealEstate,
  RealEstateHttpClientServices,
} from '../../services/realEstate/real-estate-http-client-services';
import { PropertyAvailability } from '../../services/realEstate/real-estate-http-client-services';

@Component({
  selector: 'app-property-tabs',
  templateUrl: './property-tabs.html',
  styleUrl: './property-tabs.css',
})
export class PropertyTabsComponent {
  readonly tabs = [
    { id: 'description', label: 'Description' },
    { id: 'disponibilites', label: 'Disponibilités' },
    { id: 'avis', label: 'Avis' },
    { id: 'localisation', label: 'Localisation' },
  ];
  @Input() set logement(value: RealEstate) {
    this._logement = value;
    this.chargerDonnees(value.slug);
  }

  private realEstateService = inject(RealEstateHttpClientServices);
  private _logement!: RealEstate;

  get logement(): RealEstate {
    return this._logement;
  }

  ongletActif = signal<string>('description');
  reviews = signal<PropertyReview[]>([]);
  disponibilites = signal<PropertyAvailability[]>([]);
  noteMoyenne = signal<number>(0);
  nbAvis = signal<number>(0);

  private chargerDonnees(slug: string): void {
    this.realEstateService.getPropertyReviews(slug).subscribe({
      next: (res) => {
        this.reviews.set(res.data);
        this.noteMoyenne.set(res.note_moyenne);
        this.nbAvis.set(res.nb_avis);
      },
    });

    this.realEstateService.getPropertyAvailability(slug).subscribe({
      next: (res) => this.disponibilites.set(res.data),
    });
  }

  selectionner(onglet: string): void {
    this.ongletActif.set(onglet);
  }
}
