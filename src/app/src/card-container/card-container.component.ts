import { NgFor, NgStyle, WeekDay } from '@angular/common';
import { Component } from '@angular/core';
import {
  CardListComponent,
  IGroup,
  ILessonList,
} from '../card-list/card-list.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { WeekDayPipe } from '../week-day.pipe';
const les2: IGroup[] = [
  {
    id: 'A8',
    lessons: [
      {
        dayId: 1,
        lessons: [
          { time: '92:00', subject: 'dsf', lecturer: 'Ab J', classroom: '41' },
          {
            time: '10:00',
            subject: 'werwqr',
            lecturer: 'B tgwrg',
            classroom: '1',
          },
          {
            time: '11:00',
            subject: 'dsf',
            lecturer: 'Lo O',
            classroom: '24',
          },
        ],
      },
      {
        dayId: 2,
        lessons: [
          { time: '9:00', subject: 'PE', lecturer: 'Cc J', classroom: '8' },
          { time: '10:00', subject: 'Sdsd', lecturer: 'B Fo', classroom: '9' },
          {
            time: '12:20',
            subject: 'sdgsvfxczs',
            lecturer: 'Lo O',
            classroom: '6',
          },
          { time: '12:00', subject: 'Ioo', lecturer: 'Lo O', classroom: '6' },
        ],
      },
      {
        dayId: 3,
        lessons: [
          { time: '9:00', subject: 'Qeu', lecturer: 'Ab J', classroom: '100' },
          { time: '10:00', subject: 'Math', lecturer: 'B Fo', classroom: '1' },
          {
            time: '12:00',
            subject: 'French',
            lecturer: 'Lo O',
            classroom: '17',
          },
        ],
      },
      {
        dayId: 4,
        lessons: [
          { time: '9:30', subject: 'Sd', lecturer: 'Ab J', classroom: '41' },
          { time: '10:00', subject: 'Cd', lecturer: 'B Fo', classroom: '1' },
          { time: '11:00', subject: 'Nj', lecturer: 'Lo O', classroom: '132' },
        ],
      },
      {
        dayId: 5,
        lessons: [
          { time: '9:00', subject: 'PE', lecturer: 'Ab J', classroom: '421' },
          { time: '10:00', subject: 'Ko', lecturer: 'B F', classroom: '112' },
          { time: '13:00', subject: 'F', lecturer: 'Lo O', classroom: '1' },
        ],
      },
    ],
  },
  {
    id: 'B8',
    lessons: [
      {
        dayId: 1,
        lessons: [
          { time: '9:00', subject: 'PE', lecturer: 'Cc J', classroom: '8' },
          { time: '10:00', subject: 'Sdsd', lecturer: 'B Fo', classroom: '9' },
          { time: '11:00', subject: 'Ioo', lecturer: 'Lo O', classroom: '6' },
          { time: '12:00', subject: 'Ioo', lecturer: 'Lo O', classroom: '6' },
        ],
      },
      {
        dayId: 2,
        lessons: [
          { time: '9:30', subject: 'Sd', lecturer: 'Ab J', classroom: '41' },
          { time: '10:00', subject: 'Cd', lecturer: 'B Fo', classroom: '1' },
          { time: '11:00', subject: 'Nj', lecturer: 'Lo O', classroom: '132' },
        ],
      },
      {
        dayId: 3,
        lessons: [
          { time: '9:00', subject: 'Qeu', lecturer: 'Ab J', classroom: '100' },
          { time: '10:00', subject: 'Math', lecturer: 'B Fo', classroom: '1' },
          {
            time: '12:00',
            subject: 'French',
            lecturer: 'Lo O',
            classroom: '17',
          },
        ],
      },
      {
        dayId: 4,
        lessons: [
          { time: '9:00', subject: 'PE', lecturer: 'Ab J', classroom: '41' },
          { time: '10:00', subject: 'Sd', lecturer: 'B Fo', classroom: '1' },
          {
            time: '11:00',
            subject: 'FrenchFrenchFrenchFrenchFrench',
            lecturer: 'Lo O',
            classroom: '17',
          },
        ],
      },
      {
        dayId: 5,
        lessons: [
          { time: '13:00', subject: 'F', lecturer: 'Lo O', classroom: '1' },
          { time: '11:00', subject: 'Ko', lecturer: 'B F', classroom: '112' },
          { time: '9:00', subject: 'PE', lecturer: 'Ab J', classroom: '421' },
        ],
      },
    ],
  },
];

// const lessonsList: ILessonList[] = [
//   {
//     dayId: 1,
//     lessons: [
//       { time: '9:00', subject: 'PE', lecturer: 'Ab J', classroom: '41' },
//       { time: '10:00', subject: 'Sd', lecturer: 'B Fo', classroom: '1' },
//       { time: '11:00', subject: 'French', lecturer: 'Lo O', classroom: '17' },
//     ],
//   },
//   {
//     dayId: 2,
//     lessons: [
//       { time: '9:00', subject: 'PE', lecturer: 'Cc J', classroom: '8' },
//       { time: '10:00', subject: 'Sdsd', lecturer: 'B Fo', classroom: '9' },
//       { time: '11:00', subject: 'Ioo', lecturer: 'Lo O', classroom: '6' },
//       { time: '12:00', subject: 'Ioo', lecturer: 'Lo O', classroom: '6' },
//     ],
//   },
//   {
//     dayId: 3,
//     lessons: [
//       { time: '9:00', subject: 'Qeu', lecturer: 'Ab J', classroom: '100' },
//       { time: '10:00', subject: 'Math', lecturer: 'B Fo', classroom: '1' },
//       { time: '12:00', subject: 'French', lecturer: 'Lo O', classroom: '17' },
//     ],
//   },
//   {
//     dayId: 4,
//     lessons: [
//       { time: '9:30', subject: 'Sd', lecturer: 'Ab J', classroom: '41' },
//       { time: '10:00', subject: 'Cd', lecturer: 'B Fo', classroom: '1' },
//       { time: '11:00', subject: 'Nj', lecturer: 'Lo O', classroom: '132' },
//     ],
//   },
//   {
//     dayId: 5,
//     lessons: [
//       { time: '9:00', subject: 'PE', lecturer: 'Ab J', classroom: '421' },
//       { time: '11:00', subject: 'Ko', lecturer: 'B F', classroom: '112' },
//       { time: '13:00', subject: 'F', lecturer: 'Lo O', classroom: '1' },
//     ],
//   },
// ];
@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [
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
  togglerZoom = false;
  data: IGroup[] = les2;
  currentSchedule?: ILessonList[];
  // inp = '';
  options: string[] = this.data.map((e) => e.id); //['A1', 'B8', 'O7'];
  onInputChange(value: string) {
    if (this.options.includes(value))
      this.currentSchedule = this.data.find((el) => el.id === value)?.lessons;
  }
  toggleZoom() {
    this.togglerZoom = !this.togglerZoom;
  }
}
