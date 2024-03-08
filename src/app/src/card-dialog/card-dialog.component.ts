import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { NgIf } from '@angular/common';
import { IGroup } from '../models';
@Component({
  selector: 'app-card-dialog',
  standalone: true,

  templateUrl: './card-dialog.component.html',
  styleUrl: './card-dialog.component.scss',

  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatInputModule,
    MatFormFieldModule,
    MatDialogActions,
    MatDialogClose,
    MatDividerModule,
    FormsModule,
    NgIf,
  ],
})
export class CardDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IGroup,
    public dialogRef: MatDialogRef<CardDialogComponent>
  ) {}

  cancelDialog() {
    this.dialogRef.close();
  }
  saveDialog() {
    this.dialogRef.close(this.data);
  }
}
