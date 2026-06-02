import { TestBed } from '@angular/core/testing';

import { StatsHttpClientServices } from './stats-http-client-services';

describe('StatsHttpClientServices', () => {
  let service: StatsHttpClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatsHttpClientServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
