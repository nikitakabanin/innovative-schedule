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

@Injectable({
  providedIn: 'root',
})
export class HttpService implements OnDestroy {
  private http = inject(HttpClient);
  private tables = new BehaviorSubject<IGroup[]>(mockLessons);
  private unsubscribe$ = new Subject<void>();

  authToken = '';
  constructor() {
    // this.http
    //   .post<any>(
    //     'http://26.130.211.203:8080/group_number',
    //     'group=group_09C31&'
    //   )
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((response) => console.log(response));
    // this.http
    //   .post<any>(
    //     'http://26.130.211.203:8080/login',
    //     'username=aboba&password=32131&'
    //   )
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((response) => console.log(response));
    // this.http
    //   .get<any>('http://26.130.211.203:8080/all_groups')
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((v) => console.log(v));
    this.http
      .post<any>(
        'http://26.130.211.203:8080/login/group_number',
        'group=group_09C31&'
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
      'http://26.130.211.203:8080/login',
      `username=${user.name}&password=${user.password}&`
    );
  }
  post() {}
}
