import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //реализовать задание левел аксесса исключительно с бекенда, во избежание подделок
  private levelAccess: 'admin' | 'lecturer' | 'student' | 'unlogged in' =
    'unlogged in';
  constructor() {}
}
