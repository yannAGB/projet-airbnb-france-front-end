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
  usersInformations = inject(HttpClientServices);
  users: User[] = [];

  /* Modèle de la FormGroup */
  registerForm = new FormGroup({
    civilite: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    birthday: new FormControl(''),
  });

  onSubmit(): void {
    // Usage of EventEmitter with form value
    console.log(this.registerForm.value);
  }

  showUsers() {
    this.usersInformations.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }
}
