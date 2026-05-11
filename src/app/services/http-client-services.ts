import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpClientServices {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<ApiResponse<User[]>>('http://localhost:8000/api/check');
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
