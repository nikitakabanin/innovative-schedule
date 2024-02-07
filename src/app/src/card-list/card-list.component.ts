import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
export interface ILesson {
  time: string;
  subject: string;
  lecturer: string;
  classroom: string;
}
const lessonsList: ILesson[] = [
  { time: '9:00', subject: 'PE', lecturer: 'Ab J', classroom: '41' },
  { time: '10:00', subject: 'Math', lecturer: 'B Fo', classroom: '1' },
  { time: '11:00', subject: 'French', lecturer: 'Lo O', classroom: '17' },
];
@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  displayedColumns: string[] = ['time', 'subject', 'lecturer', 'classroom'];
  dataSource = lessonsList;
}
