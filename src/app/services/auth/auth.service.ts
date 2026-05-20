import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { APP_SETTINGS } from '../../../app/app.settings';

export interface AuthResponse {
  token: string;
  refresh_token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = inject(APP_SETTINGS).apiUrl;

  private readonly TOKEN_KEY = 'jwt_token';
  private readonly REFRESH_TOKEN_KEY = 'jwt_refresh_token';

  /* Signal réactif — vrai si connecté */
  estConnecte = signal<boolean>(this.aUnToken());

  /* ------------------------------------------------ */
  /*                     Login                        */
  /* ------------------------------------------------ */
  login(payload: LoginPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/api/login`, payload).pipe(
      tap((response) => {
        this.sauvegarderToken(response.token);
        this.sauvegarderRefreshToken(response.refresh_token);
        this.estConnecte.set(true);
      }),
    );
  }

  /* ------------------------------------------------ */
  /*                    Logout                        */
  /* ------------------------------------------------ */
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    this.estConnecte.set(false);
    this.router.navigate(['/login']);
  }

  /* ------------------------------------------------ */
  /*                 Refresh token                    */
  /* ------------------------------------------------ */
  refreshToken(): Observable<AuthResponse> {
    const refreshToken = this.getRefreshToken();

    return this.http
      .post<AuthResponse>(`${this.apiUrl}/api/token/refresh`, { refresh_token: refreshToken })
      .pipe(
        tap((response) => {
          this.sauvegarderToken(response.token);
          this.sauvegarderRefreshToken(response.refresh_token);
        }),
      );
  }

  /* ------------------------------------------------ */
  /*                    Helpers                       */
  /* ------------------------------------------------ */
  sauvegarderToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  sauvegarderRefreshToken(token: string): void {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  aUnToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  /* Décode le payload du JWT pour lire les infos */
  getPayloadToken(): any | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch {
      return null;
    }
  }

  getRoles(): string[] {
    return this.getPayloadToken()?.roles ?? [];
  }

  estAdmin(): boolean {
    return this.getRoles().includes('ROLE_ADMIN');
  }
}
