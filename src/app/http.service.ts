import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, inject } from '@angular/core';
import { IGroup } from './src/models';
import { mockLessons } from './src/mock.table';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService implements OnDestroy {
  private http = inject(HttpClient);
  private tables = new BehaviorSubject<IGroup[]>(mockLessons);
  private unsubscribe$ = new Subject<void>();
  constructor() {
    this.http
      .get<IGroup[]>('')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => this.tables.next(value));
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  getTables(): BehaviorSubject<IGroup[]> {
    return this.tables;
  }
}
