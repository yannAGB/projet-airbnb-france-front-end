import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesSection } from './favorites-section';

describe('FavoritesSection', () => {
  let component: FavoritesSection;
  let fixture: ComponentFixture<FavoritesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesSection],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
