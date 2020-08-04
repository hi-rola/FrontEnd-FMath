import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAdministrador2Component } from './principal-administrador2.component';

describe('PrincipalAdministrador2Component', () => {
  let component: PrincipalAdministrador2Component;
  let fixture: ComponentFixture<PrincipalAdministrador2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalAdministrador2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAdministrador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
