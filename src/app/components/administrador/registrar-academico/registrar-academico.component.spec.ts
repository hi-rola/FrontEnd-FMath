import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAcademicoComponent } from './registrar-academico.component';

describe('RegistrarAcademicoComponent', () => {
  let component: RegistrarAcademicoComponent;
  let fixture: ComponentFixture<RegistrarAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
