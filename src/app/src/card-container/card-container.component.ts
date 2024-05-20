import { NgFor, NgIf, NgStyle } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
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

import { MatDialog } from '@angular/material/dialog';
import { EditSheduleDialogComponent } from '../edit-shedule-dialog/edit-shedule-dialog.component';
import cloner from 'lodash';
import { BehaviorSubject, Subject, takeUntil, map } from 'rxjs';
import { GroupNamePipe } from '../group-name.pipe';

import { JwtService } from '../jwt.service';
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
  @ViewChild('box') idInput!: ElementRef;
  httpService = inject(HttpService);
  togglerZoom = false;
  today = new Date();
  //data: IGroup[];
  currentSchedule = new BehaviorSubject<ILessonList>({ lessons: [] });
  todaySchedule?: ILessonList;
  options: string[] = [];
  filteredOptions: string[] = [];
  unsubscribe$ = new Subject<void>();
  jwt = inject(JwtService);
  constructor(public dialog: MatDialog) {
    //this.data = mockLessons;
    this.httpService
      .getGroupNames()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.options = value.groups;
        this.filteredOptions = [...this.options];

        this.jwt.setToken(value.token ?? '');
      });
    //this.options = this.data.map((e) => e.id);
    //this.filteredOptions = [...this.options];
  }
  onInputChange(value: string) {
    this.filteredOptions = this.options.filter((opt) => opt.includes(value));
    if (this.options.includes(value)) {
      // this.currentSchedule.next(
      //   this.data.find((el) => el.id === value)?.lessons
      // );
      this.httpService.getGroup(value).subscribe((response) => {
        this.currentSchedule.next({ lessons: response });
        console.log(response);
      });
      this.todaySchedule = {
        lessons: this.currentSchedule.value.lessons, //?.find(
        //   (el) => el.day === this.today.getDay()
        // ),
      };
    }
  }
  toggleZoom() {
    this.togglerZoom = !this.togglerZoom;
    // this.httpService.edit()?.subscribe((v) => console.log(v));
  }

  editSchedule(lessons: ILessonList) {
    console.log(lessons);
    this.dialog
      .open(EditSheduleDialogComponent, {
        data: cloner.cloneDeep(lessons),
      })
      .afterClosed()
      .subscribe((res: ILessonList) => {
        if (!res) return;
        // this.currentSchedule = next(
        //   this.currentSchedule.value?.slice(
        //     this.currentSchedule.value.findIndex((e) => e.dayId === res.dayId),
        //     1,
        //     res
        //   )
        // );
        this.httpService.edit({
          id: this.idInput.nativeElement.value,
          lessons: this.currentSchedule.value,
        });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
