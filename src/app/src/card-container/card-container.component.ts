import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  CardListComponent,
  ILessonList,
} from '../card-list/card-list.component';
const lessonsList: ILessonList[] = [
  {
    dayId: 1,
    lessons: [
      { time: '9:00', subject: 'PE', lecturer: 'Ab J', classroom: '41' },
      { time: '10:00', subject: 'Sd', lecturer: 'B Fo', classroom: '1' },
      { time: '11:00', subject: 'French', lecturer: 'Lo O', classroom: '17' },
    ],
  },
  {
    dayId: 2,
    lessons: [
      { time: '9:00', subject: 'PE', lecturer: 'Cc J', classroom: '8' },
      { time: '10:00', subject: 'Sdsd', lecturer: 'B Fo', classroom: '9' },
      { time: '11:00', subject: 'Ioo', lecturer: 'Lo O', classroom: '6' },
      { time: '12:00', subject: 'Ioo', lecturer: 'Lo O', classroom: '6' },
    ],
  },
  {
    dayId: 3,
    lessons: [
      { time: '9:00', subject: 'Qeu', lecturer: 'Ab J', classroom: '100' },
      { time: '10:00', subject: 'Math', lecturer: 'B Fo', classroom: '1' },
      { time: '12:00', subject: 'French', lecturer: 'Lo O', classroom: '17' },
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
      { time: '11:00', subject: 'Ko', lecturer: 'B F', classroom: '112' },
      { time: '13:00', subject: 'F', lecturer: 'Lo O', classroom: '1' },
    ],
  },
];
@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [NgFor, CardListComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss',
})
export class CardContainerComponent {
  dataSource: ILessonList[] = lessonsList;
}
