import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalConjuntos1Component } from './principal-conjuntos1.component';

describe('PrincipalConjuntos1Component', () => {
  let component: PrincipalConjuntos1Component;
  let fixture: ComponentFixture<PrincipalConjuntos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalConjuntos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalConjuntos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
