import { TestBed } from '@angular/core/testing';

import { GuardiaEstudianteService } from './guardia-estudiante.service';

describe('GuardiaEstudianteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardiaEstudianteService = TestBed.get(GuardiaEstudianteService);
    expect(service).toBeTruthy();
  });
});
