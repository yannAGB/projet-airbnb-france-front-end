import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTabs } from './property-tabs';

describe('PropertyTabs', () => {
  let component: PropertyTabs;
  let fixture: ComponentFixture<PropertyTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
