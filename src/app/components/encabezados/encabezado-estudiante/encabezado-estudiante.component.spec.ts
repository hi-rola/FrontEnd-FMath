import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoEstudianteComponent } from './encabezado-estudiante.component';

describe('EncabezadoEstudianteComponent', () => {
  let component: EncabezadoEstudianteComponent;
  let fixture: ComponentFixture<EncabezadoEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncabezadoEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
