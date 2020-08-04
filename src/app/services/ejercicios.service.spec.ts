import { TestBed } from '@angular/core/testing';

import { EjerciciosService } from './ejercicios.service';

describe('EjerciciosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EjerciciosService = TestBed.get(EjerciciosService);
    expect(service).toBeTruthy();
  });
});
