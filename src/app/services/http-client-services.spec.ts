import { TestBed } from '@angular/core/testing';

import { UserHttpClientServices } from './user-http-client-services';

describe('HttpClientServices', () => {
  let service: UserHttpClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHttpClientServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
