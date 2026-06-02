import { TestBed } from '@angular/core/testing';

import { CategorieHttpClientServices } from './categorie-http-client-services';

describe('CategorieHttpClientServices', () => {
  let service: CategorieHttpClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieHttpClientServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
