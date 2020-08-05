import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEvaluacionN2Component } from './msj-evaluacion-n2.component';

describe('MsjEvaluacionN2Component', () => {
  let component: MsjEvaluacionN2Component;
  let fixture: ComponentFixture<MsjEvaluacionN2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjEvaluacionN2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEvaluacionN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
