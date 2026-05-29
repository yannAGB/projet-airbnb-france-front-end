import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBarComponent {
  voyageurs = signal(1);

  increment(): void {
    this.voyageurs.update((v) => v + 1);
  }
  decrement(): void {
    this.voyageurs.update((v) => Math.max(1, v - 1));
  }
}
