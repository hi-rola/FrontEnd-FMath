import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoAcademicoComponent } from './encabezado-academico.component';

describe('EncabezadoAcademicoComponent', () => {
  let component: EncabezadoAcademicoComponent;
  let fixture: ComponentFixture<EncabezadoAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
