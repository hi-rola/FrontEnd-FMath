import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEvaluacionN2FinalizadoComponent } from './msj-evaluacion-n2-finalizado.component';

describe('MsjEvaluacionN2FinalizadoComponent', () => {
  let component: MsjEvaluacionN2FinalizadoComponent;
  let fixture: ComponentFixture<MsjEvaluacionN2FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjEvaluacionN2FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEvaluacionN2FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
