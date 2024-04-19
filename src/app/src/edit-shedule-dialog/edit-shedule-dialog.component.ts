import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IGroup, ILesson, ILessonList } from '../models';
import { WeekDayPipe } from '../week-day.pipe';
import { CardListComponent } from '../card-list/card-list.component';
import { NgIf, NgStyle } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-edit-shedule-dialog',
  standalone: true,
  imports: [
    NgStyle,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    WeekDayPipe,
    CardListComponent,
    NgIf,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './edit-shedule-dialog.component.html',
  styleUrl: './edit-shedule-dialog.component.scss',
})
export class EditSheduleDialogComponent {
  chosenLesson!: ILesson;
  index = 0;
  constructor(
    public dialogRef: MatDialogRef<EditSheduleDialogComponent>,
<<<<<<< HEAD
    @Inject(MAT_DIALOG_DATA) public data: ILessonList
  ) {
    this.chosenLesson = data.lessons[0];
  }
=======
    @Inject(MAT_DIALOG_DATA) public data: ILessonList[]
  ) {}
>>>>>>> parent of 5d88391 (add arrows on edit dialog)
  close() {
    // this.data.lessons.sort((a, b) => a.time - b.time);
    this.dialogRef.close();
  }
  onSelectChange(v: any) {
    console.log(v);
  }
<<<<<<< HEAD
  nextLesson() {
    this.index !== this.data.lessons.length - 1
      ? (this.chosenLesson = this.data.lessons[++this.index])
      : (this.chosenLesson = this.data.lessons[(this.index = 0)]);
  }
  prevLesson() {
    this.index !== 0
      ? (this.chosenLesson = this.data.lessons[--this.index])
      : (this.chosenLesson =
          this.data.lessons[(this.index = this.data.lessons.length - 1)]);
  }
  addLesson() {
    this.data.lessons.push({
      time: '',
      subject: '',
      lecturer: '',
      classroom: '',
    });
    this.index = this.data.lessons.length - 1;
    this.chosenLesson = this.data.lessons[this.index];
  }
  deleteLesson() {
    this.data.lessons = this.data.lessons.filter(
      (e) => e.subject !== this.chosenLesson.subject
    );
    this.nextLesson();
    console.log(this.data.lessons);
  }
=======
  displayedColumns = ['time', 'subject', 'classroom', 'lecturer'];
>>>>>>> parent of 5d88391 (add arrows on edit dialog)
}
