import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  UserHttpClientServices,
  RegisterPayload,
  User,
} from '../services/user-http-client-services';

/* -------------------------------------------------- */
/*         Validator - confirmation mot de passe      */
/* -------------------------------------------------- */
export const motsDePasseCorrespondants: ValidatorFn = (
  group: AbstractControl,
): ValidationErrors | null => {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { motsDePasseDifferents: true };
};

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm {
  private usersInformations = inject(UserHttpClientServices);

  users: User[] = [];
  successMessage: string | null = null;
  errorMessage: string | null = null;

  registerForm = new FormGroup(
    {
      civilite: new FormControl('monsieur', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      role: new FormControl('ROLE_USER', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      agreeTerms: new FormControl(false, Validators.requiredTrue),
    },
    /* Validator appliqué sur le groupe entier */
    { validators: motsDePasseCorrespondants },
  );

  /* Helper pour accéder facilement aux erreurs */
  get passwordsMismatch(): boolean {
    return (
      this.registerForm.hasError('motsDePasseDifferents') &&
      !!this.registerForm.get('confirmPassword')?.touched
    );
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    this.successMessage = null;
    this.errorMessage = null;

    const { agreeTerms, ...payload } = this.registerForm.value;

    this.usersInformations.insertUser(payload as RegisterPayload).subscribe({
      next: (res) => {
        this.successMessage = res.message ?? 'Inscription réussie !';
        this.registerForm.reset();
      },
      error: (err) => {
        this.errorMessage = err.error?.message ?? 'Une erreur est survenue';
      },
    });
  }
}
