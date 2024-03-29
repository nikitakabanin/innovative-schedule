import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy, SkipSelf, inject } from '@angular/core';
import { IUser, IGroup } from './src/models';
import { mockLessons } from './src/mock.table';
import {
  BehaviorSubject,
  Observable,
  Subject,
  switchMap,
  takeUntil,
  of,
  catchError,
} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    Header: 'Bearer xyzabc123',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpService implements OnDestroy {
  private http = inject(HttpClient);
  private tables = new BehaviorSubject<IGroup[]>(mockLessons);
  private unsubscribe$ = new Subject<void>();
  constructor() {
    this.http
      .get<IGroup[]>('https://jsonplaceholder.typicode.com/todos/1') //'http://26.132.161.229:22222/hello'
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => console.log(value));
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  getTables(): BehaviorSubject<IGroup[]> {
    return this.tables;
  }
  post() {
    this.http
      .post(
        'http://26.132.161.229:22222/postTesting',
        {
          name: 'admin',
          password: 'admin_password',
        },

        httpOptions
      )
      .subscribe((value) => console.log(value));
  }
  auth(user: IUser): Observable<boolean> {
    user.name.toString();
    return this.http.post<boolean>(
      'http://26.132.161.229:22222/auth',
      { '[user.name': user.password },
      httpOptions
    );
  }
}
