import { TestBed } from '@angular/core/testing';

import { GuardiaAdministradorService } from './guardia-administrador.service';

describe('GuardiaAdministradorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardiaAdministradorService = TestBed.get(GuardiaAdministradorService);
    expect(service).toBeTruthy();
  });
});
