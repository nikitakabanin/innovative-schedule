import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = 'your_auth_token';

    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken),
    });

    return next.handle(authReq);
  }
}
