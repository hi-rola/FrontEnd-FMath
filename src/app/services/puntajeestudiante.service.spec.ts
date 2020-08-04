import { TestBed } from '@angular/core/testing';

import { PuntajeestudianteService } from './puntajeestudiante.service';

describe('PuntajeestudianteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuntajeestudianteService = TestBed.get(PuntajeestudianteService);
    expect(service).toBeTruthy();
  });
});
