import { Routes } from '@angular/router';
import { authGuard } from './services/auth/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login-form').then((m) => m.LoginForm),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/registration/registration-form').then((m) => m.RegistrationForm),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  /*   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, */
];
