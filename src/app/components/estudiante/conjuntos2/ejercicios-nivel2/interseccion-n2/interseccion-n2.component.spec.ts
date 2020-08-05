import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterseccionN2Component } from './interseccion-n2.component';

describe('InterseccionN2Component', () => {
  let component: InterseccionN2Component;
  let fixture: ComponentFixture<InterseccionN2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterseccionN2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterseccionN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
