import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSheduleDialogComponent } from './edit-shedule-dialog.component';

describe('EditSheduleDialogComponent', () => {
  let component: EditSheduleDialogComponent;
  let fixture: ComponentFixture<EditSheduleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSheduleDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
