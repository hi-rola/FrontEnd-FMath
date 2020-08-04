import { TestBed } from '@angular/core/testing';

import { GuardiaAcademicoService } from './guardia-academico.service';

describe('GuardiaAcademicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardiaAcademicoService = TestBed.get(GuardiaAcademicoService);
    expect(service).toBeTruthy();
  });
});
