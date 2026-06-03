import { Component, OnInit, signal } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar';
import { StatsHttpClientServices, Stats } from '../../services/stats/stats-http-client-services';

@Component({
  selector: 'app-hero',
  imports: [SearchBarComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent implements OnInit {
  private statsService = new StatsHttpClientServices();

  stats = signal<Stats | null>(null);

  ngOnInit(): void {
    this.statsService.getStats().subscribe({
      next: (res) => this.stats.set(res.data),
      error: () => {},
    });
  }

  get nbLogements(): string {
    const n = this.stats()?.logements;
    return n ? n.toLocaleString('fr-FR') : '00+';
  }

  get nbHotes(): string {
    const n = this.stats()?.hotes;
    return n ? n.toLocaleString('fr-FR') : '00+';
  }
}
