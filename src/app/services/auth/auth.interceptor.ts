import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const token = localStorage.getItem('token');

  /*
   * Vérification de la présence de token JWT
   */
  if (!token) {
    return next(req);
  }

  /*
   * Clone de la requête et ajout du header Authorization
   */
  const authRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authRequest);
};
