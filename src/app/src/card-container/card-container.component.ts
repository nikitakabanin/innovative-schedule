import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
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
import { CardDialogComponent } from '../card-dialog/card-dialog.component';
import { EditSheduleDialogComponent } from '../edit-shedule-dialog/edit-shedule-dialog.component';

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
    NgStyle,
  ],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss',
})
export class CardContainerComponent {
  httpService = inject(HttpService);
  togglerZoom = false;
  data: IGroup[];
  currentSchedule?: ILessonList[];
  todaySchedule?: ILessonList;
  options: string[];
  filteredOptions: string[];
  today = new Date();
  constructor(public dialog: MatDialog) {
    this.data = mockLessons;
    this.options = this.data.map((e) => e.id); //['A1', 'B8', 'O7'];
    this.filteredOptions = [...this.options];
  }
  onInputChange(value: string) {
    this.filteredOptions = this.options.filter((opt) => opt.includes(value));
    if (this.options.includes(value)) {
      this.currentSchedule = this.data.find((el) => el.id === value)?.lessons;
      this.todaySchedule = this.currentSchedule?.find(
        (el) => el.dayId === this.today.getDay()
      );
    }
  }
  toggleZoom() {
    this.togglerZoom = !this.togglerZoom;
  }
  openDialog() {
    // this.dialog
    //   .open(CardDialogComponent, { autoFocus: true })
    //   .afterClosed()
    //   .subscribe((result) => console.log(result));
    this.httpService.post();
  }
  editSchedule() {
    this.dialog
      .open(EditSheduleDialogComponent, {
        autoFocus: true,
        data: this.currentSchedule,
      })
      .afterClosed()
      .subscribe((v) => console.log(v));
  }
}
