import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { IGroup, ILessonList } from '../models';
import { CardListComponent } from '../card-list/card-list.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { WeekDayPipe } from '../week-day.pipe';
import { HttpService } from '../../http.service';
import { mockLessons } from '../mock.table';
import { MatDialog } from '@angular/material/dialog';
import { EditSheduleDialogComponent } from '../edit-shedule-dialog/edit-shedule-dialog.component';
import cloner from 'lodash';
import { BehaviorSubject, Subject, takeUntil, map } from 'rxjs';
import { GroupNamePipe } from '../group-name.pipe';
import { translateGroup } from '../translate.util';
@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    CardListComponent,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    WeekDayPipe,
    GroupNamePipe,
    NgStyle,
  ],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss',
})
export class CardContainerComponent implements OnDestroy {
  httpService = inject(HttpService);
  togglerZoom = false;
  today = new Date();
  data: IGroup[];
  currentSchedule = new BehaviorSubject<ILessonList[] | undefined>(undefined);
  todaySchedule?: ILessonList;
  options: string[];
  filteredOptions: string[];
  unsubscribe$ = new Subject<void>();
  constructor(public dialog: MatDialog) {
    this.data = mockLessons;
    this.httpService
      .getGroupNames()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.options = value.groups.map((v) => translateGroup(v));
        this.filteredOptions = [...this.options];
        console.log(this.filteredOptions);
      });
    this.options = this.data.map((e) => e.id);
    this.filteredOptions = [...this.options];
  }
  onInputChange(value: string) {
    this.filteredOptions = this.options.filter((opt) => opt.includes(value));
    if (this.options.includes(value)) {
      this.currentSchedule.next(
        this.data.find((el) => el.id === value)?.lessons
      );
      this.todaySchedule = this.currentSchedule.value?.find(
        (el) => el.dayId === this.today.getDay()
      );
    }
  }
  toggleZoom() {
    this.togglerZoom = !this.togglerZoom;
  }

  editSchedule(lessons: ILessonList) {
    console.log(lessons);
    this.dialog
      .open(EditSheduleDialogComponent, {
        data: cloner.cloneDeep(lessons),
      })
      .afterClosed()
      .subscribe((res: ILessonList) => {
        if (res)
          this.currentSchedule.value?.splice(
            this.currentSchedule.value.findIndex((e) => e.dayId === res.dayId),
            1,
            res
          );
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
