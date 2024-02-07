import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [NgFor, CardListComponent],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.scss',
})
export class CardContainerComponent {}
