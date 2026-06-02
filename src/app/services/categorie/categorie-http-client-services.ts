import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_SETTINGS } from '../../app.settings';

export interface Categorie {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  parent: { id: number; title: string; slug: string } | null;
  nbLogements: number;
}

export interface CategorieApiResponse {
  success: boolean;
  total: number;
  data: Categorie[];
}

@Injectable({ providedIn: 'root' })
export class CategorieHttpClientServices {
  private http = inject(HttpClient);
  private apiUrl = inject(APP_SETTINGS).apiUrl;

  /* Toutes les catégories */
  getCategories(): Observable<CategorieApiResponse> {
    return this.http.get<CategorieApiResponse>(`${this.apiUrl}/api/categories`);
  }

  /* Catégories parentes uniquement */
  getCategoriesParentes(): Observable<CategorieApiResponse> {
    return this.http.get<CategorieApiResponse>(`${this.apiUrl}/api/categories?parentes=true`);
  }
}
