import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDialogComponent } from './card-dialog.component';

describe('CardDialogComponent', () => {
  let component: CardDialogComponent;
  let fixture: ComponentFixture<CardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
