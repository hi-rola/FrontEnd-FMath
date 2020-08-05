import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEvaluacionN1Component } from './msj-evaluacion-n1.component';

describe('MsjEvaluacionN1Component', () => {
  let component: MsjEvaluacionN1Component;
  let fixture: ComponentFixture<MsjEvaluacionN1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjEvaluacionN1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEvaluacionN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
