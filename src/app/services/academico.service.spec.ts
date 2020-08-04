import { TestBed } from '@angular/core/testing';

import { AcademicoService } from './academico.service';

describe('AcademicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcademicoService = TestBed.get(AcademicoService);
    expect(service).toBeTruthy();
  });
});
