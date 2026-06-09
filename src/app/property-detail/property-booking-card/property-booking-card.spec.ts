import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBookingCard } from './property-booking-card';

describe('PropertyBookingCard', () => {
  let component: PropertyBookingCard;
  let fixture: ComponentFixture<PropertyBookingCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBookingCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyBookingCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
