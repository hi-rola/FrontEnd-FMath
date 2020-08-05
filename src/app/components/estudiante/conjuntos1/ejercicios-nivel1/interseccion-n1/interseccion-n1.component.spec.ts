import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterseccionN1Component } from './interseccion-n1.component';

describe('InterseccionN1Component', () => {
  let component: InterseccionN1Component;
  let fixture: ComponentFixture<InterseccionN1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterseccionN1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterseccionN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
