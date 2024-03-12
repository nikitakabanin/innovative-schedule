import {
  AfterContentInit,
  AfterViewInit,
  Component,
  inject,
} from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpService } from '../../http.service';
import { IUser } from '../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './auth-dialog.component.html',
  styleUrl: './auth-dialog.component.scss',
})
export class AuthDialogComponent {
  data: IUser = { name: '', password: '', role: 'student' };
  http = inject(HttpService);

  constructor(public dialogRef: MatDialogRef<AuthDialogComponent>) {}
}
