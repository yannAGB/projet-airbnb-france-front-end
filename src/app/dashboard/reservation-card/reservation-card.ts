import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Reservation {
  id: number;
  avatar: string;
  nom: string;
  logement: string;
  dates: string;
  nuits: number;
  voyageurs: number;
  montant: number;
  statut: 'en_attente' | 'confirme' | 'a_confirmer' | 'annule';
  note?: string;
}

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.html',
  styleUrl: './reservation-card.css',
})
export class ReservationCardComponent {
  @Input() reservation!: Reservation;
  @Output() accepter = new EventEmitter<number>();
  @Output() refuser = new EventEmitter<number>();

  get statutLabel(): string {
    const labels: Record<string, string> = {
      en_attente: 'En attente',
      confirme: 'Confirmé',
      a_confirmer: 'À confirmer',
      annule: 'Annulé',
    };
    return labels[this.reservation.statut] ?? '';
  }

  get statutClass(): string {
    const classes: Record<string, string> = {
      en_attente: 'st-attente',
      confirme: 'st-confirme',
      a_confirmer: 'st-a-confirmer',
      annule: 'st-annule',
    };
    return classes[this.reservation.statut] ?? '';
  }
}
