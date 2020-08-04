import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEstudianteActualizadoComponent } from './msj-estudiante-actualizado.component';

describe('MsjEstudianteActualizadoComponent', () => {
  let component: MsjEstudianteActualizadoComponent;
  let fixture: ComponentFixture<MsjEstudianteActualizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjEstudianteActualizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEstudianteActualizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
