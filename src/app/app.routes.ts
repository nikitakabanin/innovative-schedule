import { Routes } from '@angular/router';
import { CardContainerComponent } from './src/card-container/card-container.component';

export const routes: Routes = [
  { path: 'schedule', component: CardContainerComponent },
  { path: '**', redirectTo: 'schedule' },
];
