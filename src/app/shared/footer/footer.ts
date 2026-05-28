import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  ideesColonnes = [
    { title: 'Europe', links: ['Paris', 'Londres', 'Rome', 'Madrid', 'Lisbonne'] },
    { title: 'Montagnes', links: ['Chamonix', "Val d'Isère", 'Méribel', 'Tignes'] },
    { title: 'Été', links: ['Nice', 'Cannes', 'Saint-Tropez', 'Biarritz'] },
    { title: 'Océan', links: ['La Rochelle', 'Brest', 'Sète', 'Arcachon'] },
  ];

  footerColonnes = [
    {
      title: 'Assistance',
      links: ["Centre d'aide", 'Communauté', 'Signaler un problème', 'Options accessibilité'],
    },
    {
      title: 'Accueil voyageurs',
      links: ['Pourquoi accueillir', 'Sécurité', 'Forum hôtes', 'Edition hôtes'],
    },
    {
      title: 'TrouvezMoi',
      links: ['Salle de presse', 'Fonctionnalités', 'Charte sociale', "Offres d'emploi"],
    },
  ];
}
