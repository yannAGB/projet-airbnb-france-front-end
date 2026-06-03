import { TestBed } from '@angular/core/testing';

import { DashboardStatsHttpClientServices } from './dashboard-stats-http-client-services';

describe('DashboardStatsHttpClientServices', () => {
  let service: DashboardStatsHttpClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardStatsHttpClientServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
