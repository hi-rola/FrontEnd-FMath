import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaN2Component } from './diferencia-n2.component';

describe('DiferenciaN2Component', () => {
  let component: DiferenciaN2Component;
  let fixture: ComponentFixture<DiferenciaN2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiferenciaN2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciaN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
