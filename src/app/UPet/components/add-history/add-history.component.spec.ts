import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHistoryComponent } from './add-history.component';

describe('AddHistoryComponent', () => {
  let component: AddHistoryComponent;
  let fixture: ComponentFixture<AddHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
