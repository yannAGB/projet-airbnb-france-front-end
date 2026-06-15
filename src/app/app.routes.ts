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
    loadComponent: () => import('./login/login-form').then((m) => m.LoginForm),
  },
  {
    path: 'register',
    loadComponent: () => import('./registration/registration-form').then((m) => m.RegistrationForm),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.DashboardComponent),
  },

  {
    path: 'logements/:slug',
    loadComponent: () =>
      import('./property-detail/property-detail').then((m) => m.PropertyDetailComponent),
  },
  /*   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, */
];
