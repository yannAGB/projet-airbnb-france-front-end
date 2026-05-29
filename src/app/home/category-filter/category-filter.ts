import { Component, signal } from '@angular/core';

interface Categorie {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css',
})
export class CategoryFilterComponent {
  active = signal<string>('Tous');

  readonly categories: Categorie[] = [
    { label: 'Tous', icon: 'bi-grid-fill' },
    { label: 'Boulodrome', icon: 'bi-trophy-fill' },
    { label: 'Jazz', icon: 'bi-music-note-beamed' },
    { label: 'Places', icon: 'bi-map-fill' },
    { label: 'Conditions actuelles', icon: 'bi-cloud-sun-fill' },
    { label: 'Gym', icon: 'bi-activity' },
    { label: 'Nature', icon: 'bi-tree-fill' },
    { label: 'Plage', icon: 'bi-water' },
    { label: 'Montagne', icon: 'bi-triangle-fill' },
    { label: 'Luxe', icon: 'bi-gem' },
  ];

  selecter(label: string): void {
    this.active.set(label);
  }
}
