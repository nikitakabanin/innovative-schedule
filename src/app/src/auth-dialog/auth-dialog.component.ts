import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpService } from '../../http.service';
import { AuthUser } from '../models';
@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './auth-dialog.component.html',
  styleUrl: './auth-dialog.component.scss',
})
export class AuthDialogComponent {
  data: AuthUser = { name: '', password: '' };
  http = inject(HttpService);
  auth$ = this.http.auth(this.data);
  constructor(public dialogRef: MatDialogRef<AuthDialogComponent>) {}
  login() {
    this.dialogRef.close(this.auth$);
  }
  cancel() {
    this.dialogRef.close();
  }
}
