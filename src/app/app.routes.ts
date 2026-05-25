import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () =>
      import('./user/registration-form/registration-form').then((m) => m.RegistrationForm),
  },
  {
    path: 'login',
    loadComponent: () => import('./user/login-form/login-form').then((m) => m.LoginForm),
  },
];
