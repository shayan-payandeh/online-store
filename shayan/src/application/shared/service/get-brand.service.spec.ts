import { TestBed } from '@angular/core/testing';

import { GetBrandService } from './get-brand.service';

describe('GetBrandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBrandService = TestBed.get(GetBrandService);
    expect(service).toBeTruthy();
  });
});
