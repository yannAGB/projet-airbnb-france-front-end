import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_SETTINGS } from '../../app.settings';

export interface StatItem {
  valeur: number;
  trend: number;
}

export interface DashboardStats {
  revenus: StatItem;
  aVenir: StatItem;
  note: { valeur: number; nbAvis: number };
}

export interface DashboardStatsResponse {
  success: boolean;
  data: DashboardStats;
}

@Injectable({ providedIn: 'root' })
export class DashboardStatsHttpClientServices {
  private http = inject(HttpClient);
  private apiUrl = inject(APP_SETTINGS).apiUrl;

  getStats(): Observable<DashboardStatsResponse> {
    return this.http.get<DashboardStatsResponse>(`${this.apiUrl}/api/dashboard/stats`);
  }
}
