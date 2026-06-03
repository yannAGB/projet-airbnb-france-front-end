import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserHttpClientServices, User } from '../../services/user-http-client-services';
import { NotificationHttpClientServices } from '../../services/notification/notification-http-client-services';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-navbar',
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './dashboard-navbar.html',
  styleUrl: './dashboard-navbar.css',
})
export class DashboardNavbarComponent implements OnInit {
  private userService = inject(UserHttpClientServices);
  private notificationService = inject(NotificationHttpClientServices);

  utilisateur = signal<User | null>(null);
  nbNotifications = signal<number>(0);

  ngOnInit(): void {
    this.userService.getMe().subscribe({
      next: (res) => this.utilisateur.set(res.data),
    });

    this.notificationService.getCount().subscribe({
      next: (res) => this.nbNotifications.set(res.data.count),
    });
  }

  get initiales(): string {
    const u = this.utilisateur();
    if (!u) return '?';
    return ((u.firstName?.charAt(0) ?? '') + (u.lastName?.charAt(0) ?? '')).toUpperCase();
  }
}
