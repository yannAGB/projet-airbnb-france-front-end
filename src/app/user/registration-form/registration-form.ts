import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientServices, User } from '../../services/http-client-services';

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private usersInformations = inject(HttpClientServices);

  users: User[] = [];

  registerForm = new FormGroup({
    civilite: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    birthday: new FormControl(''),
  });

  /* Chargement automatique au démarrage du composant */

  /*   ngOnInit(): void {
    this.showUsers();

	Affichage des utilisateurs HTML
		<!-- @if (users.length > 0) {
	<h1>Utilisateurs ({{ users.length }})</h1>

	@for (user of users; track user.userId) {
		<p>{{ user.userId }}</p>
		<p>{{ user.name }}</p>
	}
	} @else {
	<p>Chargement en cours...</p>
	} -->

  } */

  showUsers(): void {
    this.usersInformations.getUsers().subscribe({
      next: (response) => {
        this.users = response.data;
      },
      error: (err) => {
        console.error('Erreur chargement users', err);
      },
    });
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
  }
}
