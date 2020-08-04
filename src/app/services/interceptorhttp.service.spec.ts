import { TestBed } from '@angular/core/testing';

import { InterceptorhttpService } from './interceptorhttp.service';

describe('InterceptorhttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptorhttpService = TestBed.get(InterceptorhttpService);
    expect(service).toBeTruthy();
  });
});
