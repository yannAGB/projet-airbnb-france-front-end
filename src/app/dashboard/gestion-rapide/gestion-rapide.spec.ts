import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRapide } from './gestion-rapide';

describe('GestionRapide', () => {
  let component: GestionRapide;
  let fixture: ComponentFixture<GestionRapide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionRapide],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionRapide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
