import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NotificationHttpClientServices,
  Notification,
} from '../../services/notification/notification-http-client-services';

@Component({
  selector: 'app-dernier-message',
  imports: [RouterLink],
  templateUrl: './dernier-message.html',
  styleUrl: './dernier-message.css',
})
export class DernierMessageComponent implements OnInit {
  private notificationService = inject(NotificationHttpClientServices);

  notification = signal<Notification | null>(null);
  chargement = signal<boolean>(true);

  ngOnInit(): void {
    this.notificationService.getLatest().subscribe({
      next: (res) => {
        this.notification.set(res.data);
        this.chargement.set(false);
      },
      error: () => this.chargement.set(false),
    });
  }

  tempsRelatif(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const h = Math.floor(diff / 3600000);
    if (h < 1) return "Il y a moins d'1h";
    if (h < 24) return `Il y a ${h}h`;
    return `Il y a ${Math.floor(h / 24)}j`;
  }
}
