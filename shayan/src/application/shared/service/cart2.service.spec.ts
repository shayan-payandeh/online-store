import { TestBed } from '@angular/core/testing';

import { Cart2Service } from './cart2.service';

describe('Cart2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Cart2Service = TestBed.get(Cart2Service);
    expect(service).toBeTruthy();
  });
});
