import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IGroup, ILessonList } from '../models';
import { WeekDayPipe } from '../week-day.pipe';
import { CardListComponent } from '../card-list/card-list.component';
import { NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-edit-shedule-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButton,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    WeekDayPipe,
    CardListComponent,
    NgIf,
    MatTableModule,
  ],
  templateUrl: './edit-shedule-dialog.component.html',
  styleUrl: './edit-shedule-dialog.component.scss',
})
export class EditSheduleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditSheduleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ILessonList[]
  ) {}
  close() {
    this.dialogRef.close();
  }
  onSelectChange(v: any) {
    console.log(v);
  }
  displayedColumns = ['time', 'subject', 'classroom', 'lecturer'];
}
