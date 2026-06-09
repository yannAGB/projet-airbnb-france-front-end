import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyHost } from './property-host';

describe('PropertyHost', () => {
  let component: PropertyHost;
  let fixture: ComponentFixture<PropertyHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyHost],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyHost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
