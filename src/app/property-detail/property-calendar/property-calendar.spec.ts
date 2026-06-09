import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCalendar } from './property-calendar';

describe('PropertyCalendar', () => {
  let component: PropertyCalendar;
  let fixture: ComponentFixture<PropertyCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyCalendar],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyCalendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
