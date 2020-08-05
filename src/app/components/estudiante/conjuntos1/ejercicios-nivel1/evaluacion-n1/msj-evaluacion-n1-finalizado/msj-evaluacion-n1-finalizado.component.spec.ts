import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEvaluacionN1FinalizadoComponent } from './msj-evaluacion-n1-finalizado.component';

describe('MsjEvaluacionN1FinalizadoComponent', () => {
  let component: MsjEvaluacionN1FinalizadoComponent;
  let fixture: ComponentFixture<MsjEvaluacionN1FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjEvaluacionN1FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEvaluacionN1FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
