import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  /* Routes publiques */
  const routesPubliques = ['/api/login', '/api/register', '/api/verify/email'];
  const estPublique = routesPubliques.some((route) => req.url.includes(route));

  if (estPublique) {
    return next(req);
  }

  /* Ajout du token dans le header Authorization */
  const requeteAvecToken = token
    ? req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      })
    : req;

  return next(requeteAvecToken).pipe(
    catchError((erreur: HttpErrorResponse) => {
      /* Token expiré ou invalide : déconnexion automatique */
      if (erreur.status === 401) {
        authService.logout();
      }

      return throwError(() => erreur);
    }),
  );
};
