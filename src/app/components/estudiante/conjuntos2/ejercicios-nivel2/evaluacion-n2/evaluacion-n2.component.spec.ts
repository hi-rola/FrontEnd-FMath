import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionN2Component } from './evaluacion-n2.component';

describe('EvaluacionN2Component', () => {
  let component: EvaluacionN2Component;
  let fixture: ComponentFixture<EvaluacionN2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionN2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
