import { Component, inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientServices, User } from '../../services/http-client-services';

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm {
  usersRecup = inject(HttpClientServices);
  users: User[] = [];

  /* Modèle de la FormGroup */
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit(): void {
    // Usage of EventEmitter with form value
    console.log(this.registerForm.value);
  }

  showUsers() {
    this.usersRecup.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }
}
