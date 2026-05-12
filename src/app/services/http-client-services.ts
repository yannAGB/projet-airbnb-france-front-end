import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpClientServices {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<ApiResponse<User[]>>(`${environment.apiBaseUrl}/api/check`);
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
