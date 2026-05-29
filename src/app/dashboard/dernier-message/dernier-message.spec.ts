import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DernierMessage } from './dernier-message';

describe('DernierMessage', () => {
  let component: DernierMessage;
  let fixture: ComponentFixture<DernierMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DernierMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(DernierMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
