import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_SETTINGS } from '../../app.settings';

export type BookingStatut = 'en_attente' | 'confirme' | 'a_confirmer' | 'annule';

export interface BookingGuest {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  initiales: string;
}

export interface BookingLogement {
  id: number;
  title: string;
  slug: string;
  image: string | null;
}

export interface Booking {
  id: number;
  guest: BookingGuest;
  logement: BookingLogement;
  dateArrivee: string;
  dateDepart: string;
  nbNuits: number;
  nbVoyageurs: number;
  montant: number;
  statut: BookingStatut;
  note: string | null;
  created_at: string;
}

export interface BookingApiResponse {
  success: boolean;
  total: number;
  data: Booking[];
}

export interface BookingSingleResponse {
  success: boolean;
  data: Booking;
}
export interface CreateBookingPayload {
  realEstateId: number;
  dateArrivee: string;
  dateDepart: string;
  nbVoyageurs: number;
  note?: string;
}

@Injectable({ providedIn: 'root' })
export class BookingHttpClientServices {
  private http = inject(HttpClient);
  private apiUrl = inject(APP_SETTINGS).apiUrl;

  getBookings(): Observable<BookingApiResponse> {
    return this.http.get<BookingApiResponse>(`${this.apiUrl}/api/bookings`);
  }

  getUpcoming(limit = 5): Observable<BookingApiResponse> {
    return this.http.get<BookingApiResponse>(`${this.apiUrl}/api/bookings/upcoming?limit=${limit}`);
  }

  updateStatut(id: number, statut: BookingStatut): Observable<BookingSingleResponse> {
    return this.http.patch<BookingSingleResponse>(`${this.apiUrl}/api/bookings/${id}/statut`, {
      statut,
    });
  }

  createBooking(payload: CreateBookingPayload): Observable<BookingSingleResponse> {
    return this.http.post<BookingSingleResponse>(`${this.apiUrl}/api/bookings/create`, payload);
  }
}
