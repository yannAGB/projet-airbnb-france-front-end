import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
@Injectable({ providedIn: 'root' })
export class RegistrationForm {
  private http = inject(HttpClient);

  /* Modèle de la FormGroup */
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    // Usage of EventEmitter with form value
    console.warn(this.registerForm.value);
    this.http.get<unknown>('http://localhost:8000/api/check').subscribe((config) => {
      console.warn(config);
    });
  }
}
