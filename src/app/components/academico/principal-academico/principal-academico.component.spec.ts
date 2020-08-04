import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAcademicoComponent } from './principal-academico.component';

describe('PrincipalAcademicoComponent', () => {
  let component: PrincipalAcademicoComponent;
  let fixture: ComponentFixture<PrincipalAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
