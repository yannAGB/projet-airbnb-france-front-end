import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSection } from './popular-section';

describe('PopularSection', () => {
  let component: PopularSection;
  let fixture: ComponentFixture<PopularSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularSection],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
