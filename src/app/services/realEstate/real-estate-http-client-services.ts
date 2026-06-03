import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_SETTINGS } from '../../app.settings';

/* ---- Interfaces ---- */

export interface RealEstateCategorie {
  id: number;
  title: string;
  slug: string;
}

export interface RealEstateCapacite {
  maxTravelers: number;
  adults: number;
  children: number;
  babies: number;
}

export interface RealEstateAdresse {
  numero: string;
  rue: string;
  codePostal: string;
  complement: string | null;
  ville: string;
  pays: string;
}

export interface RealEstateCoordonnees {
  latitude: number;
  longitude: number;
}

export interface RealEstate {
  id: number;
  title: string;
  description: string;
  slug: string;
  price: number;
  promotion: string;
  image: string | null;
  images: string[];
  type: string;
  categorie: RealEstateCategorie;
  capacite: RealEstateCapacite;
  adresse: RealEstateAdresse;
  coordonnees: RealEstateCoordonnees;
  likes: number | null;
  is_online: boolean;
  created_at: string;
  updated_at: string;
}

export interface RealEstateApiResponse {
  success: boolean;
  total: number;
  data: RealEstate[];
}

export interface RealEstateSingleResponse {
  success: boolean;
  data: RealEstate;
}

@Injectable({
  providedIn: 'root',
})
export class RealEstateHttpClientServices {
  private http = inject(HttpClient);
  private apiUrl = inject(APP_SETTINGS).apiUrl;

  /* ---- Tous les logements ---- */
  getRealEstates(): Observable<RealEstateApiResponse> {
    return this.http.get<RealEstateApiResponse>(`${this.apiUrl}/api/real-estates`);
  }

  /* ---- Logements limités (page d'accueil) ---- */
  getRealEstatesHome(limit = 6): Observable<RealEstateApiResponse> {
    return this.http.get<RealEstateApiResponse>(`${this.apiUrl}/api/real-estates?limit=${limit}`);
  }

  /* ---- Par catégorie ---- */
  getRealEstatesByCategorie(slug: string): Observable<RealEstateApiResponse> {
    return this.http.get<RealEstateApiResponse>(
      `${this.apiUrl}/api/real-estates?categorie=${slug}`,
    );
  }

  /* ---- Un seul logement ---- */
  getRealEstateById(id: number): Observable<RealEstateSingleResponse> {
    return this.http.get<RealEstateSingleResponse>(`${this.apiUrl}/api/real-estates/${id}`);
  }

  /* ---- Par slug ---- */
  getRealEstateBySlug(slug: string): Observable<RealEstateSingleResponse> {
    return this.http.get<RealEstateSingleResponse>(`${this.apiUrl}/api/real-estates/slug/${slug}`);
  }

  /* ---- Logements coup de coeur limités (page d'accueil) ---- */
  getCoupDeCoeur(limit = 6): Observable<RealEstateApiResponse> {
    return this.http.get<RealEstateApiResponse>(
      `${this.apiUrl}/api/real-estates/coup-de-coeur?limit=${limit}`,
    );
  }

  /* ---- Logements destinations populaires limités (page d'accueil) ---- */
  getDestinations(limit = 5): Observable<RealEstateApiResponse> {
    return this.http.get<RealEstateApiResponse>(
      `${this.apiUrl}/api/real-estates/destinations?limit=${limit}`,
    );
  }
}
