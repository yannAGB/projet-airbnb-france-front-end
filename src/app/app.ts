import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationForm } from './user/registration-form/registration-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistrationForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontoffice-site-airbnb');
}
