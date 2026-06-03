import { Component, OnInit, signal } from '@angular/core';
import {
  CategorieHttpClientServices,
  Categorie,
} from '../../services/categorie/categorie-http-client-services';

/* Mapping icônes par slug ou titre */
const ICONES: Record<string, string> = {
  appartement: 'bi-building',
  villa: 'bi-house-heart-fill',
  maison: 'bi-house-fill',
  studio: 'bi-door-open-fill',
  loft: 'bi-grid-1x2-fill',
  cabane: 'bi-tree-fill',
  chateau: 'bi-bank2',
  bungalow: 'bi-umbrella-fill',
};

function icone(slug: string): string {
  return ICONES[slug] ?? 'bi-grid-fill';
}

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css',
})
export class CategoryFilterComponent implements OnInit {
  private categorieService = new CategorieHttpClientServices();

  active = signal<string>('Tous');
  categories = signal<Categorie[]>([]);
  chargement = signal<boolean>(true);

  ngOnInit(): void {
    this.categorieService.getCategoriesParentes().subscribe({
      next: (res) => {
        this.categories.set(res.data);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });
  }

  icone(slug: string): string {
    return icone(slug);
  }

  selecter(label: string): void {
    this.active.set(label);
  }
}
