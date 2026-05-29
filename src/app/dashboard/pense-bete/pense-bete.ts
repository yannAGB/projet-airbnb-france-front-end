import { Component } from '@angular/core';

interface Tache {
  id: number;
  texte: string;
  sousTitre: string;
  date: string;
}

interface TacheFaite {
  id: number;
  texte: string;
}

@Component({
  selector: 'app-pense-bete',
  templateUrl: './pense-bete.html',
  styleUrl: './pense-bete.css',
})
export class PenseBeteComponent {
  readonly taches: Tache[] = [
    {
      id: 1,
      texte: 'Nettoyage prévu à la villa de Farenne',
      sousTitre: 'Farenne — 5 mai — 11h30',
      date: 'Vendredi 3 Mai — 11:30',
    },
    {
      id: 2,
      texte: 'Nouvelle arrivée prévue au Mas des Oliviers',
      sousTitre: 'Dimanche 12 Mai — 10:00',
      date: 'Dimanche 12 Mai — 10:00',
    },
  ];

  readonly tachesFaites: TacheFaite[] = [
    { id: 1, texte: 'Clés prêtées à la villa de Farenne' },
    { id: 2, texte: 'Vendredi 10 Mai — 11h00' },
    { id: 3, texte: 'Nouvelle arrivée prévue au Mas des Oliviers' },
  ];
}
