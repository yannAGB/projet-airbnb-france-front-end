import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserHttpClientServices, LoginPayload } from '../../services/user-http-client-services';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  private usersInformations = inject(UserHttpClientServices);
  private router = inject(Router);

  successMessage: string | null = null;
  errorMessage: string | null = null;

  loginForm = new FormGroup({
    identifier: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.successMessage = null;
    this.errorMessage = null;

    this.usersInformations.loginUser(this.loginForm.value as LoginPayload).subscribe({
      next: (res) => {
        localStorage.setItem('access_token', res.token);
        this.successMessage = 'Connexion réussie !';
        this.router.navigate(['/dashboard']);
        console.log('Utilisateur connecté', res.data);
      },
      error: (err) => {
        this.errorMessage = err.error?.message ?? 'Identifiants incorrects';
      },
    });
  }
}
