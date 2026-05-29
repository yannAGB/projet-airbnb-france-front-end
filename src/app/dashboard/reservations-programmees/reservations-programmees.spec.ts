import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsProgrammees } from './reservations-programmees';

describe('ReservationsProgrammees', () => {
  let component: ReservationsProgrammees;
  let fixture: ComponentFixture<ReservationsProgrammees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsProgrammees],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationsProgrammees);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
