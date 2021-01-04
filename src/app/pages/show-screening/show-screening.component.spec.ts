import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScreeningComponent } from './show-screening.component';

describe('ShowScreeningComponent', () => {
  let component: ShowScreeningComponent;
  let fixture: ComponentFixture<ShowScreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowScreeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
