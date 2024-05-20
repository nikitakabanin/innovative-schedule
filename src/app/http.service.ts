import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, SkipSelf, inject } from '@angular/core';
import { IUser, IGroup, ILesson, ILessonList } from './src/models';
import { mockLessons } from './src/mock.table';
import { Observable, Subject } from 'rxjs';
import { translateBackGroup } from './src/translate.util';
import { AuthData } from './src/models';
@Injectable({
  providedIn: 'root',
})
export class HttpService implements OnDestroy {
  private http = inject(HttpClient);
  private unsubscribe$ = new Subject<void>();
  private url = '25.52.242.153:8080'; //26.35.147.101//25.52.242.153
  constructor() {}
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  getGroupNames() {
    return this.http.get<{ groups: string[]; token?: string }>(
      `http://${this.url}/all_groups`
    );
  }
  getGroup(group: string) {
    return this.http.post<ILesson[]>(`http://${this.url}/group_number`, {
      group: translateBackGroup(group),
    });
  }
  auth(user: IUser) {
    return this.http.post<AuthData>(`http://${this.url}/login`, user);
  }
  edit(group: { id: string; lessons: ILessonList } | undefined = undefined) {
    return this.http.post<any>(`http://${this.url}/edit`, {
      id: mockLessons[0].id,
      body: JSON.stringify(mockLessons[0]),
    });
  }
}
