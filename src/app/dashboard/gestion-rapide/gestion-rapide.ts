import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ActionRapide {
  label: string;
  icon: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-gestion-rapide',
  imports: [RouterLink],
  templateUrl: './gestion-rapide.html',
  styleUrl: './gestion-rapide.css',
})
export class GestionRapideComponent {
  @Input() titre = 'Gestion rapide';

  readonly actions: ActionRapide[] = [
    {
      label: 'Mon calendrier',
      icon: 'bi-calendar3-fill',
      route: '/dashboard/calendrier',
      color: '#EEF2FF',
    },
    {
      label: 'Mes réservations',
      icon: 'bi-bookmark-fill',
      route: '/dashboard/reservations',
      color: '#FFF5F2',
    },
    {
      label: 'Mes annonces',
      icon: 'bi-megaphone-fill',
      route: '/dashboard/annonces',
      color: '#F0FFF4',
    },
    {
      label: 'Messages',
      icon: 'bi-chat-dots-fill',
      route: '/dashboard/messages',
      color: '#FFF8E1',
    },
  ];
}
