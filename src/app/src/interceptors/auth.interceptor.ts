import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap, Observable, catchError, throwError } from 'rxjs';

export const AuthInterceptor = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authToken = 'your_auth_token';

  const authReq = req.clone({
    headers: req.headers.set('Authorization', authToken),
  });

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
      }
      return throwError(() => err);
    })
  );
};
