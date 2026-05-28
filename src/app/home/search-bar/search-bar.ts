import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBarComponent {
  voyageurs = signal(1);

  increment() {
    this.voyageurs.update((v) => v + 1);
  }
  decrement() {
    this.voyageurs.update((v) => Math.max(1, v - 1));
  }
}
