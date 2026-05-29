import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar';

@Component({
  selector: 'app-hero',
  imports: [SearchBarComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {}
