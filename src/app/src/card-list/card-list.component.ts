import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { WeekDayPipe } from '../week-day.pipe';
import { MatDividerModule } from '@angular/material/divider';
export interface ILesson {
  time: string;
  subject: string;
  lecturer: string;
  classroom: string;
}
export type ILessonList = { dayId: number; lessons: ILesson[] };
export type IGroup = { id: string; lessons: ILessonList[] };
@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule, WeekDayPipe, MatDividerModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  displayedColumns: string[] = ['time', 'subject', 'lecturer', 'classroom'];
  @Input({ required: true }) dataSource!: ILessonList;
}
