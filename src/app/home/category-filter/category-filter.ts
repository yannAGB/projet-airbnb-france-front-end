import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css',
})
export class CategoryFilterComponent {
  active = signal('Tous');

  categories = [
    { label: 'Tous', icon: 'bi-grid' },
    { label: 'Boulodrome', icon: 'bi-trophy' },
    { label: 'Jazz', icon: 'bi-music-note' },
    { label: 'Places', icon: 'bi-map' },
    { label: 'Conditions Actuelles', icon: 'bi-cloud-sun' },
    { label: 'Gym', icon: 'bi-activity' },
    { label: 'Nature', icon: 'bi-tree' },
    { label: 'Plage', icon: 'bi-water' },
    { label: 'Montagne', icon: 'bi-circle' },
  ];
}
