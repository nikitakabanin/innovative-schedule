import { Injectable, inject } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({ providedIn: 'root' })
export class JwtService {
  private lc_key = 'auth_token';
  private authToken = '';

  constructor() {
    this.authToken = localStorage.getItem(this.lc_key) || '';
  }
  getToken() {
    return this.authToken;
  }
  setToken(token: string) {
    this.authToken = token;
    localStorage.setItem(this.lc_key, token);
  }
  removeToken() {
    localStorage.removeItem(this.lc_key);
  }
}
