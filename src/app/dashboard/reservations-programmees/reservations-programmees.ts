import { Component, signal } from '@angular/core';
import { ReservationCardComponent, Reservation } from '../reservation-card/reservation-card';

@Component({
  selector: 'app-reservations-programmees',
  imports: [ReservationCardComponent],
  templateUrl: './reservations-programmees.html',
  styleUrl: './reservations-programmees.css',
})
export class ReservationsProgrammeesComponent {
  reservations = signal<Reservation[]>([
    {
      id: 1,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      nom: 'Thomas Lefèvre',
      logement: 'Villa de Farenne',
      dates: '1 Nov 2026 - 2 nuits',
      nuits: 2,
      voyageurs: 4,
      montant: 880,
      statut: 'en_attente',
    },
    {
      id: 2,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      nom: 'Emma Dubois',
      logement: 'Studio Farenne',
      dates: '16 Oct 2026 - 3 nuits',
      nuits: 3,
      voyageurs: 2,
      montant: 670,
      statut: 'confirme',
    },
    {
      id: 3,
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
      nom: 'Julien Martin',
      logement: 'Mas des Oliviers',
      dates: '17 Juil 2026 - 5 nuits',
      nuits: 5,
      voyageurs: 3,
      montant: 1200,
      statut: 'en_attente',
      note: 'Bonjour, est-ce que vous avez une table de ping-pong ?',
    },
    {
      id: 4,
      avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
      nom: 'Clara Fournier',
      logement: 'Villa de Farenne',
      dates: '30 Mar 2026 - 1 nuit',
      nuits: 1,
      voyageurs: 2,
      montant: 1360,
      statut: 'a_confirmer',
    },
  ]);

  accepterReservation(id: number): void {
    this.reservations.update((list) =>
      list.map((r) => (r.id === id ? { ...r, statut: 'confirme' as const } : r)),
    );
  }

  refuserReservation(id: number): void {
    this.reservations.update((list) =>
      list.map((r) => (r.id === id ? { ...r, statut: 'annule' as const } : r)),
    );
  }
}
