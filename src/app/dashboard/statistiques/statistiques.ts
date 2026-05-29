import { Component } from '@angular/core';

interface Stat {
  label: string;
  valeur: string;
  trend: number;
}

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.html',
  styleUrl: './statistiques.css',
})
export class StatistiquesComponent {
  readonly stats: Stat[] = [
    { label: 'Revenus', valeur: '1 992 €', trend: 13 },
    { label: 'À venir', valeur: '5', trend: -41 },
  ];

  readonly stars = [0, 1, 2, 3, 4];
}
