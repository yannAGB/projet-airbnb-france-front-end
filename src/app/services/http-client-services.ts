import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APP_SETTINGS } from '../app.settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientServices {
  private http = inject(HttpClient);
  private apiUrl = inject(APP_SETTINGS).apiUrl;

  getUsers(): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(`${this.apiUrl}/api/register`);
  }
}

export interface User {
  userId: number;
  name: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}
