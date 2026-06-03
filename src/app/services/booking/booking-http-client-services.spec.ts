import { TestBed } from '@angular/core/testing';

import { BookingHttpClientServices } from './booking-http-client-services';

describe('BookingHttpClientServices', () => {
  let service: BookingHttpClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingHttpClientServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
