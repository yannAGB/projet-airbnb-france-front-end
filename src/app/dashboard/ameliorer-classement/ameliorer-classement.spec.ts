import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeliorerClassement } from './ameliorer-classement';

describe('AmeliorerClassement', () => {
  let component: AmeliorerClassement;
  let fixture: ComponentFixture<AmeliorerClassement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmeliorerClassement],
    }).compileComponents();

    fixture = TestBed.createComponent(AmeliorerClassement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
