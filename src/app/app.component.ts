import { Component, OnDestroy, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardContainerComponent } from './src/card-container/card-container.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from './src/auth-dialog/auth-dialog.component';
import { IUser } from './src/models';
import { HttpService } from './http.service';
import { JwtService } from './src/jwt.service';
import { JsonpInterceptor } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { uniqBy } from 'lodash';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, CardContainerComponent, RouterLink],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  title = 'schedule';
  isAuth = false;
  authUser?: IUser;
  http = inject(HttpService);
  jwt = inject(JwtService);
  unsubscribe$ = new Subject<void>();
  constructor(public dialog: MatDialog) {
    this.jwt.isAuthed.pipe(takeUntil(this.unsubscribe$)).subscribe((v) => {
      this.isAuth = v;
    });
  }
  openAuthDialog() {
    //cant open auth dialog
    this.dialog
      .open(AuthDialogComponent, { autoFocus: true })
      .afterClosed()
      .subscribe((value) => {
        this.http.auth(value).subscribe((v) => {
          v.token ? this.jwt.setToken(v.token) : this.jwt.removeToken();
        });
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
