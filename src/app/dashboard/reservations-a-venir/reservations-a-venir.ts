import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations-a-venir',
  templateUrl: './reservations-a-venir.html',
  styleUrl: './reservations-a-venir.css',
})
export class ReservationsAVenirComponent {
  readonly images: string[] = [
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600',
  ];
}
