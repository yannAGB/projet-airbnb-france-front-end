import { Component, inject, OnInit, signal } from '@angular/core';
import { ReservationCardComponent } from '../reservation-card/reservation-card';
import {
  BookingHttpClientServices,
  Booking,
  BookingStatut,
} from '../../services/booking/booking-http-client-services';

import { Reservation } from '../reservation-card/reservation-card';

@Component({
  selector: 'app-reservations-programmees',
  imports: [ReservationCardComponent],
  templateUrl: './reservations-programmees.html',
  styleUrl: './reservations-programmees.css',
})
export class ReservationsProgrammeesComponent implements OnInit {
  private bookingService = inject(BookingHttpClientServices);

  chargement = signal<boolean>(true);
  reservations = signal<Reservation[]>([]);

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe({
      next: (res) => {
        this.reservations.set((res.data ?? []).map((b) => this.versReservation(b)));
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });
  }

  private versReservation(b: Booking): Reservation {
    return {
      id: b.id,
      avatar: `https://ui-avatars.com/api/?name=${b.guest.firstName}+${b.guest.lastName}&background=FF5A1F&color=fff&size=44`,
      nom: `${b.guest.firstName} ${b.guest.lastName}`,
      logement: b.logement.title,
      dates: `${b.dateArrivee} — ${b.nbNuits} nuit${b.nbNuits > 1 ? 's' : ''}`,
      nuits: b.nbNuits,
      voyageurs: b.nbVoyageurs,
      montant: b.montant,
      statut: b.statut as Reservation['statut'],
      note: b.note ?? undefined,
    };
  }

  accepterReservation(id: number): void {
    this.bookingService.updateStatut(id, 'confirme').subscribe({
      next: () => {
        this.reservations.update((list) =>
          list.map((r) => (r.id === id ? { ...r, statut: 'confirme' as const } : r)),
        );
      },
    });
  }

  refuserReservation(id: number): void {
    this.bookingService.updateStatut(id, 'annule').subscribe({
      next: () => {
        this.reservations.update((list) =>
          list.map((r) => (r.id === id ? { ...r, statut: 'annule' as const } : r)),
        );
      },
    });
  }
}
