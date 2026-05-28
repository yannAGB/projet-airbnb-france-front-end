import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyGrid } from './property-grid';

describe('PropertyGrid', () => {
  let component: PropertyGrid;
  let fixture: ComponentFixture<PropertyGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
