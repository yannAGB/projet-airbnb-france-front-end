import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_SETTINGS } from '../../app.settings';

export interface Stats {
  logements: number;
  hotes: number;
}

export interface StatsApiResponse {
  success: boolean;
  data: Stats;
}

@Injectable({ providedIn: 'root' })
export class StatsHttpClientServices {
  private http = inject(HttpClient);
  private apiUrl = inject(APP_SETTINGS).apiUrl;

  getStats(): Observable<StatsApiResponse> {
    return this.http.get<StatsApiResponse>(`${this.apiUrl}/api/stats`);
  }
}
