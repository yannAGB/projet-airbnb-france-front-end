import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupDeCoeur } from './coup-de-coeur';

describe('CoupDeCoeur', () => {
  let component: CoupDeCoeur;
  let fixture: ComponentFixture<CoupDeCoeur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoupDeCoeur],
    }).compileComponents();

    fixture = TestBed.createComponent(CoupDeCoeur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
