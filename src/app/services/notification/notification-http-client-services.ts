import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_SETTINGS } from '../../app.settings';

export interface NotificationSender {
  id: number;
  firstName: string;
  lastName: string;
  initiales: string;
}

export interface Notification {
  id: number;
  sender: NotificationSender;
  title: string;
  content: string;
  is_read: boolean;
  created_at: string;
}

export interface NotificationResponse {
  success: boolean;
  data: Notification | null;
}

export interface NotificationCountResponse {
  success: boolean;
  data: { count: number };
}

@Injectable({ providedIn: 'root' })
export class NotificationHttpClientServices {
  private http = inject(HttpClient);
  private apiUrl = inject(APP_SETTINGS).apiUrl;

  getLatest(): Observable<NotificationResponse> {
    return this.http.get<NotificationResponse>(`${this.apiUrl}/api/notifications/latest`);
  }

  getCount(): Observable<NotificationCountResponse> {
    return this.http.get<NotificationCountResponse>(`${this.apiUrl}/api/notifications/count`);
  }
}
