import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { UserHttpClientServices, User } from '../services/user-http-client-services';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private authService = inject(AuthService);
  private usersInformations = inject(UserHttpClientServices);
  private router = inject(Router);

  /* Utilisation des signals pour réagir automatiquement aux changements */
  utilisateur = signal<User | null>(null);
  chargement = signal<boolean>(true);
  erreur = signal<string | null>(null);

  ngOnInit(): void {
    this.chargerUtilisateur();
  }

  chargerUtilisateur(): void {
    this.chargement.set(true);
    this.erreur.set(null);

    this.usersInformations.getMe().subscribe({
      next: (res) => {
        this.utilisateur.set(res.data);
        this.chargement.set(false);
      },
      error: (err) => {
        console.error('Erreur /api/me :', err);
        this.erreur.set(`Erreur ${err.status} : ${err.error?.message ?? 'Inconnue'}`);
        this.chargement.set(false);
      },
    });
  }

  seDeconnecter(): void {
    this.authService.logout();
  }
}
