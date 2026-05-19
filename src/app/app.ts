import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationForm } from './user/registration-form/registration-form';
import { APP_SETTINGS } from './app.settings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistrationForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontoffice-site-airbnb');
  settings = inject(APP_SETTINGS);
}
