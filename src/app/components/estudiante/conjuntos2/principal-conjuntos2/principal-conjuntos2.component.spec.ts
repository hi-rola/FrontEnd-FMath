import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalConjuntos2Component } from './principal-conjuntos2.component';

describe('PrincipalConjuntos2Component', () => {
  let component: PrincipalConjuntos2Component;
  let fixture: ComponentFixture<PrincipalConjuntos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalConjuntos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalConjuntos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
