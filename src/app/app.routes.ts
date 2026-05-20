import { Routes } from '@angular/router';

import { authGuard, adminGuard } from './services/auth/guard/auth.guard';

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

  /* Composants à créés */
  // {
  //   path        : 'dashboard',
  //   canActivate : [authGuard],
  //   loadComponent: () =>
  //     import('./dashboard/dashboard').then(m => m.Dashboard),
  // },
  // {
  //   path        : 'admin',
  //   canActivate : [authGuard, adminGuard],
  //   loadComponent: () =>
  //     import('./admin/admin').then(m => m.Admin),
  // },

  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
];
