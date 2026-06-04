import { Component, inject, OnInit, signal } from '@angular/core';
import {
  DashboardStatsHttpClientServices,
  DashboardStats,
} from '../../services/dashboard-stats/dashboard-stats-http-client-services';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.html',
  styleUrl: './statistiques.css',
})
export class StatistiquesComponent implements OnInit {
  private statsService = inject(DashboardStatsHttpClientServices);

  stats = signal<DashboardStats | null>(null);
  chargement = signal<boolean>(true);
  readonly stars = [0, 1, 2, 3, 4];

  ngOnInit(): void {
    this.statsService.getStats().subscribe({
      next: (res) => {
        this.stats.set(res.data);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });
  }

  formatRevenu(n: number): string {
    return n.toLocaleString('fr-FR') + ' €';
  }
}
