import { TestBed } from '@angular/core/testing';

import { NotificationHttpClientServices } from './notification-http-client-services';

describe('NotificationHttpClientServices', () => {
  let service: NotificationHttpClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationHttpClientServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
