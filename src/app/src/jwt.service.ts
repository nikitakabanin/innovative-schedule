import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JwtService {
  private authKey = 'auth_token';

  private authToken = '';
  public isAuthed = new BehaviorSubject<boolean>(false);
  constructor() {
    this.authToken = localStorage.getItem(this.authKey) || '';
  }
  getToken() {
    return this.authToken;
  }

  setToken(token: string) {
    this.authToken = token;
    localStorage.setItem(this.authKey, token);
    if (token.length > 20) {
      this.isAuthed.next(true);
    } else {
      this.isAuthed.next(false);
    }
  }
  removeToken() {
    localStorage.removeItem(this.authKey);
  }
}
