import { Component, inject, OnInit, signal } from '@angular/core';
import {
  BookingHttpClientServices,
  Booking,
} from '../../services/booking/booking-http-client-services';

interface Tache {
  id: number;
  texte: string;
  sousTitre: string;
  date: string;
}

@Component({
  selector: 'app-pense-bete',
  templateUrl: './pense-bete.html',
  styleUrl: './pense-bete.css',
})
export class PenseBeteComponent implements OnInit {
  private bookingService = inject(BookingHttpClientServices);

  taches = signal<Tache[]>([]);
  tachesAFaire = signal<Tache[]>([]);
  chargement = signal<boolean>(true);

  ngOnInit(): void {
    this.bookingService.getUpcoming(6).subscribe({
      next: (res) => {
        const bookings = res.data ?? [];

        /* Tâches à faire = arrivées prochaines */
        const aFaire: Tache[] = bookings
          .filter((b) => b.statut === 'confirme' || b.statut === 'en_attente')
          .slice(0, 2)
          .map((b) => ({
            id: b.id,
            texte: `Arrivée prévu : ${b.logement.title}`,
            sousTitre: `${b.guest.firstName} ${b.guest.lastName} — ${b.nbVoyageurs} voyageur${b.nbVoyageurs > 1 ? 's' : ''}`,
            date: b.dateArrivee,
          }));

        /* Tâches terminées = réservations récentes confirmées */
        const faites: Tache[] = bookings
          .filter((b) => b.statut === 'confirme')
          .slice(0, 3)
          .map((b) => ({
            id: b.id * 100,
            texte: `Réservation confirmée — ${b.logement.title}`,
            sousTitre: b.dateArrivee,
            date: b.dateArrivee,
          }));

        this.tachesAFaire.set(aFaire);
        this.taches.set(faites);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });
  }
}
