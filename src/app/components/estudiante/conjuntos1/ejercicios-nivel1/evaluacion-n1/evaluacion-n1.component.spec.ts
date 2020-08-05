import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionN1Component } from './evaluacion-n1.component';

describe('EvaluacionN1Component', () => {
  let component: EvaluacionN1Component;
  let fixture: ComponentFixture<EvaluacionN1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionN1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
