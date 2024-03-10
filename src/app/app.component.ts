import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardContainerComponent } from './src/card-container/card-container.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from './src/auth-dialog/auth-dialog.component';
import { IUser } from './src/models';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, CardContainerComponent, RouterLink],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'schedule';
  isAuth = false;
  authUser?: IUser;
  constructor(public dialog: MatDialog) {}
  openAuthDialog() {
    this.dialog
      .open(AuthDialogComponent, { autoFocus: true })
      .afterClosed()
      .subscribe((value) => {
        console.log(value);
      });
  }
}
