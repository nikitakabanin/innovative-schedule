import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
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
    Authenticaton: '123',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpService implements OnDestroy {
  private http = inject(HttpClient);
  private tables = new BehaviorSubject<IGroup[]>(mockLessons);
  private unsubscribe$ = new Subject<void>();

  authToken = '';
  constructor() {
    this.http
      .get<IGroup[]>('http://26.132.161.229:22222/hello', {})

      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => console.log(response));

    this.http
      .post<any>(
        'http://26.132.161.229:22222/auth',
        { login: 'user', password: '23423423' },
        httpOptions
      )
      .subscribe((v) => console.log(v));

    //this.http.get<string>('getauthtokenurl');
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  getTables(): BehaviorSubject<IGroup[]> {
    return this.tables;
  }

  auth(user: IUser): Observable<any> {
    user.name.toString();

    return this.http.post<any>(
      'http://26.132.161.229:22222/auth',
      { login: user.name, password: user.password },

      httpOptions
    );
  }
  post() {}
}
