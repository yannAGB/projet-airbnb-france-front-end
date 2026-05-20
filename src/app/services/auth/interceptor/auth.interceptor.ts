import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';

/* ✅ Chemin corrigé */
import { AuthService } from '../auth.service';

/* ✅ export const (pas export class) */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  const routesPubliques = ['/api/login', '/api/register', '/api/token/refresh'];
  const estPublique = routesPubliques.some((route) => req.url.includes(route));

  if (estPublique) {
    return next(req);
  }

  const requeteAvecToken = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(requeteAvecToken).pipe(
    catchError((erreur: HttpErrorResponse) => {
      if (erreur.status === 401 && authService.getRefreshToken()) {
        return authService.refreshToken().pipe(
          switchMap((response) => {
            const nouvelleRequete = req.clone({
              setHeaders: { Authorization: `Bearer ${response.token}` },
            });
            return next(nouvelleRequete);
          }),
          catchError((erreurRefresh) => {
            authService.logout();
            return throwError(() => erreurRefresh);
          }),
        );
      }

      return throwError(() => erreur);
    }),
  );
};
