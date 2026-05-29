import { Component } from '@angular/core';

interface ColonneFooter {
  titre: string;
  liens: string[];
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  readonly idees: ColonneFooter[] = [
    { titre: 'Europe', liens: ['Paris', 'Londres', 'Rome', 'Madrid', 'Lisbonne', 'Amsterdam'] },
    { titre: 'Montagnes', liens: ['Chamonix', "Val d'Isère", 'Méribel', 'Tignes', 'Courchevel'] },
    { titre: 'Été', liens: ['Nice', 'Cannes', 'Saint-Tropez', 'Biarritz', 'La Baule'] },
    { titre: 'Océan', liens: ['La Rochelle', 'Brest', 'Sète', 'Arcachon', 'Dinard'] },
  ];

  readonly colonnes: ColonneFooter[] = [
    {
      titre: 'Assistance',
      liens: [
        "Centre d'aide",
        'Communauté',
        'Signaler un problème',
        "Options d'accessibilité",
        'Annuler une réservation',
      ],
    },
    {
      titre: 'Accueil voyageurs',
      liens: [
        'Pourquoi accueillir ?',
        'Hébergement responsable',
        'Forum des hôtes',
        'Edition de voyages',
      ],
    },
    {
      titre: 'TrouvezMoi',
      liens: [
        'Salle de presse',
        'Fonctionnalités',
        'Charte sociale',
        "Offres d'emploi",
        'Nous contacter',
      ],
    },
  ];
}
