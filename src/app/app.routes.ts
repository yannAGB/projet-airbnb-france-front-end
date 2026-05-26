import { Routes } from '@angular/router';
import { authGuard } from './services/auth/guard/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./user/login-form/login-form').then((m) => m.LoginForm),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./user/registration-form/registration-form').then((m) => m.RegistrationForm),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
