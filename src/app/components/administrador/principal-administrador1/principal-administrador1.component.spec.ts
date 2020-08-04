import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAdministrador1Component } from './principal-administrador1.component';

describe('PrincipalAdministrador1Component', () => {
  let component: PrincipalAdministrador1Component;
  let fixture: ComponentFixture<PrincipalAdministrador1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalAdministrador1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAdministrador1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
