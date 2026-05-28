import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { SearchBar } from '../../components/search-bar/search-bar';
import { PopularSection } from '../../components/popular-section/popular-section';
import { FavoritesSection } from '../../components/favorites-section/favorites-section';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, SearchBar, PopularSection, FavoritesSection, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
