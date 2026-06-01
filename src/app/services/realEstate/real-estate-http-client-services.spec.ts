import { TestBed } from '@angular/core/testing';

import { RealEstateHttpClientServices } from './real-estate-http-client-services';

describe('RealEstateHttpClientServices', () => {
  let service: RealEstateHttpClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstateHttpClientServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
