import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { APP_SETTINGS } from '../../app.settings';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private http = inject(HttpClient);
  private apiUrl = inject(APP_SETTINGS).apiUrl;

  private readonly TOKEN_KEY = 'access_token';

  estConnecte = signal<boolean>(this.aUnToken());

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  aUnToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  /* Déconnexion */
  logout(): void {
    /* Appel API pour invalider le token en base */
    this.http.post(`${this.apiUrl}/api/logout`, {}).subscribe({
      next: () => this.nettoyerSession(),
      error: () => this.nettoyerSession() /* Nettoie même si l'API échoue */,
    });
  }

  private nettoyerSession(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.estConnecte.set(false);
    this.router.navigate(['/login']);
  }
}
