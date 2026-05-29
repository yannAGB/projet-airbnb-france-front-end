import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsAVenir } from './reservations-a-venir';

describe('ReservationsAVenir', () => {
  let component: ReservationsAVenir;
  let fixture: ComponentFixture<ReservationsAVenir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsAVenir],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationsAVenir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
