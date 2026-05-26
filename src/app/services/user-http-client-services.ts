import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APP_SETTINGS } from '../app.settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserHttpClientServices {
  private http = inject(HttpClient);
  private apiUrl = inject(APP_SETTINGS).apiUrl;

  /* ---- Récupérer tous les utilisateurs ---- */
  getUsers(): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(`${this.apiUrl}/api/users`);
  }

  /* ---- Inscrire un nouvel utilisateur ---- */
  insertUser(payload: RegisterPayload): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${this.apiUrl}/api/register`, payload);
  }

  /* ---- Connecter un utilisateur ---- */
  loginUser(payload: LoginPayload): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${this.apiUrl}/api/login`, payload);
  }
  /* ---- Récupérer l'utilisateur connecté ---- */
  getMe(): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.apiUrl}/api/me`);
  }
}

export type UserCivilite = 'madame' | 'monsieur' | 'autre' | 'inconnu';
export type UserStatus = 'valid' | 'banned';
export type UserRole = 'ROLE_ADMIN' | 'ROLE_USER' | 'ROLE_IMMOBILIER';

export interface User {
  id: number;
  lastName: string | null;
  firstName: string;
  username: string;
  email: string;
  slug: string;
  roles: UserRole[];
  civilite: UserCivilite;
  status: UserStatus;
  is_valid: boolean;
  birthday: string;
  created_at: string;
  updated_at: string;
  last_login: string;
}

export interface RegisterPayload {
  lastName: string;
  firstName: string;
  username: string;
  email: string;
  password: string;
  birthday: string;
  civilite: UserCivilite;
  role: UserRole;
}

export interface LoginPayload {
  identifier: string; /* email ou username */
  password: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  token: string;
}
