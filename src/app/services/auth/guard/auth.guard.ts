import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/* ✅ Chemin corrigé */
import { AuthService } from '../auth.service';

/* ✅ export const (pas export class) */
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.aUnToken()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.estAdmin()) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
