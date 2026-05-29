import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenseBete } from './pense-bete';

describe('PenseBete', () => {
  let component: PenseBete;
  let fixture: ComponentFixture<PenseBete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenseBete],
    }).compileComponents();

    fixture = TestBed.createComponent(PenseBete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
