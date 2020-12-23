import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatCardComponent } from './seat-card.component';

describe('SeatCardComponent', () => {
  let component: SeatCardComponent;
  let fixture: ComponentFixture<SeatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
