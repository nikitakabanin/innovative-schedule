import { Component, Input, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { WeekDayPipe } from '../week-day.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { ILessonList } from '../models';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { JwtService } from '../jwt.service';
import { AsyncPipe, NgIf } from '@angular/common';
@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    WeekDayPipe,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  displayedColumns: string[] = ['time', 'subject', 'lecturer', 'classroom'];
  jwt = inject(JwtService);
  isAuth = this.jwt.isAuthed;
  @Input({ required: true }) dataSource!: ILessonList;

  @Output() editCard = new EventEmitter<ILessonList>();
  emitEdit() {
    this.editCard.emit(this.dataSource);
  }
}
