import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { APP_SETTINGS, appSettings } from './app.settings';
import { authInterceptor } from './services/auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    /* Fournir le token APP_SETTINGS avec sa valeur */
    {
      provide: APP_SETTINGS,
      useValue: appSettings,
    },
  ],
};
