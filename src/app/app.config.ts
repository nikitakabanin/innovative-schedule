import { ApplicationConfig, InjectionToken, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideHttpClient,
  HTTP_INTERCEPTORS,
  withInterceptors,
} from '@angular/common/http';
import { AuthInterceptor } from './src/interceptors/auth.interceptor';
import { provideStore } from '@ngrx/store';
import { JwtService } from './src/jwt.service';
//const AUTH_TOKEN = new InjectionToken<string>('AUTH_TOKEN');
export const appConfig: ApplicationConfig = {
  providers: [
    JwtService,

    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore(),
    provideHttpClient(withInterceptors([AuthInterceptor])),
  ],
};
