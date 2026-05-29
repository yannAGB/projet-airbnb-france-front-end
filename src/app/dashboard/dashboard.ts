import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { UserHttpClientServices, User } from '../services/user-http-client-services';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar';
import { SidebarComponent } from './sidebar/sidebar';
import { ReservationsAVenirComponent } from './reservations-a-venir/reservations-a-venir';
import { ReservationsProgrammeesComponent } from './reservations-programmees/reservations-programmees';
import { StatistiquesComponent } from './statistiques/statistiques';
import { DernierMessageComponent } from './dernier-message/dernier-message';
import { GestionRapideComponent } from './gestion-rapide/gestion-rapide';
import { AmeliorerClassementComponent } from './ameliorer-classement/ameliorer-classement';
import { PenseBeteComponent } from './pense-bete/pense-bete';
import { FooterComponent } from '../shared/footer/footer';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink,
    DashboardNavbarComponent,
    SidebarComponent,
    ReservationsAVenirComponent,
    ReservationsProgrammeesComponent,
    StatistiquesComponent,
    DernierMessageComponent,
    GestionRapideComponent,
    AmeliorerClassementComponent,
    PenseBeteComponent,
    FooterComponent,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthService);
  private userService = inject(UserHttpClientServices);

  utilisateur = signal<User | null>(null);
  chargement = signal<boolean>(true);

  ngOnInit(): void {
    this.userService.getMe().subscribe({
      next: (res) => {
        this.utilisateur.set(res.data);
        this.chargement.set(false);
      },
      error: () => {
        this.authService.logout();
      },
    });
  }

  seDeconnecter(): void {
    this.authService.logout();
  }
}
