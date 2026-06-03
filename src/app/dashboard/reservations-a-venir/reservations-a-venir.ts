import { Component, OnInit, signal } from '@angular/core';
import {
  BookingHttpClientServices,
  Booking,
} from '../../services/booking/booking-http-client-services';

@Component({
  selector: 'app-reservations-a-venir',
  templateUrl: './reservations-a-venir.html',
  styleUrl: './reservations-a-venir.css',
})
export class ReservationsAVenirComponent implements OnInit {
  private bookingService = new BookingHttpClientServices();

  bookings = signal<Booking[]>([]);
  chargement = signal<boolean>(true);

  get images(): string[] {
    return this.bookings()
      .filter((b) => b.logement.image)
      .slice(0, 3)
      .map((b) => b.logement.image!);
  }

  ngOnInit(): void {
    this.bookingService.getUpcoming(5).subscribe({
      next: (res) => {
        this.bookings.set(res.data ?? []);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });
  }
}
