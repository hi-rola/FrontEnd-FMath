import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaN1Component } from './diferencia-n1.component';

describe('DiferenciaN1Component', () => {
  let component: DiferenciaN1Component;
  let fixture: ComponentFixture<DiferenciaN1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiferenciaN1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciaN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
