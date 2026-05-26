import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

/* Guard routes privées */
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.aUnToken()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

/* Guard routes admin */
export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.aUnToken()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
