import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {
  actif = signal<string>('Tableau de bord');

  readonly menu: MenuItem[] = [
    { label: 'Tableau de bord', icon: 'bi-grid-1x2-fill', route: '/dashboard' },
    { label: 'Mes réservations', icon: 'bi-bookmark-fill', route: '/dashboard/reservations' },
    { label: 'Mon calendrier', icon: 'bi-calendar3-fill', route: '/dashboard/calendrier' },
    { label: 'Messages', icon: 'bi-chat-dots-fill', route: '/dashboard/messages', badge: 3 },
    { label: 'Mes annonces', icon: 'bi-megaphone-fill', route: '/dashboard/annonces' },
    { label: 'Avis', icon: 'bi-star-fill', route: '/dashboard/avis' },
    { label: "Centre d'aide", icon: 'bi-question-circle', route: '/dashboard/aide' },
  ];

  selectionner(label: string): void {
    this.actif.set(label);
  }
}
