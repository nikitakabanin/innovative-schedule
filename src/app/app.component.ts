import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardContainerComponent } from './src/card-container/card-container.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from './src/auth-dialog/auth-dialog.component';
import { IUser } from './src/models';
import { HttpService } from './http.service';
import { EditSheduleDialogComponent } from './src/edit-shedule-dialog/edit-shedule-dialog.component';
import { JwtService } from './src/jwt.service';
import { switchMap } from 'rxjs';
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
  http = inject(HttpService);
  jwt = inject(JwtService);
  constructor(public dialog: MatDialog) {}
  openAuthDialog() {
    //cant open auth dialog
    this.dialog
      .open(AuthDialogComponent, { autoFocus: true })
      .afterClosed()
      .subscribe((value) => {
        this.http.auth(value).subscribe((v) => {
          console.log(v.token);
          this.jwt.setToken(v.token);
        });
      });
    //this.dialog.open(EditSheduleDialogComponent, { data: { lessons: {} } });
  }
}
