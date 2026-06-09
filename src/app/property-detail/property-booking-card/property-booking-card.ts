import { Component, Input, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  BookingHttpClientServices,
  CreateBookingPayload,
} from '../../services/booking/booking-http-client-services';
import { RealEstate } from '../../services/realEstate/real-estate-http-client-services';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-property-booking-card',
  imports: [FormsModule, RouterLink],
  templateUrl: './property-booking-card.html',
  styleUrl: './property-booking-card.css',
})
export class PropertyBookingCardComponent {
  @Input() logement!: RealEstate;

  private bookingService = inject(BookingHttpClientServices);
  private authService = inject(AuthService);

  dateArrivee = signal<string>('');
  dateDepart = signal<string>('');
  nbVoyageurs = signal<number>(1);
  chargement = signal<boolean>(false);
  succes = signal<boolean>(false);
  erreur = signal<string | null>(null);

  get nbNuits(): number {
    if (!this.dateArrivee() || !this.dateDepart()) return 0;
    const diff = new Date(this.dateDepart()).getTime() - new Date(this.dateArrivee()).getTime();
    return Math.max(0, Math.floor(diff / 86400000));
  }

  get total(): number {
    return this.logement.price * this.nbNuits;
  }

  get estConnecte(): boolean {
    return this.authService.aUnToken();
  }

  reserver(): void {
    if (!this.dateArrivee() || !this.dateDepart() || this.nbNuits < 1) {
      this.erreur.set('Veuillez sélectionner des dates valides');
      return;
    }

    this.chargement.set(true);
    this.erreur.set(null);

    const payload: CreateBookingPayload = {
      realEstateId: this.logement.id,
      dateArrivee: this.dateArrivee(),
      dateDepart: this.dateDepart(),
      nbVoyageurs: this.nbVoyageurs(),
    };

    this.bookingService.createBooking(payload).subscribe({
      next: () => {
        this.succes.set(true);
        this.chargement.set(false);
      },
      error: (err) => {
        this.erreur.set(err.error?.message ?? 'Erreur lors de la réservation');
        this.chargement.set(false);
      },
    });
  }

  increment(): void {
    if (this.nbVoyageurs() < this.logement.capacite.maxTravelers) {
      this.nbVoyageurs.update((v) => v + 1);
    }
  }

  decrement(): void {
    this.nbVoyageurs.update((v) => Math.max(1, v - 1));
  }
}
