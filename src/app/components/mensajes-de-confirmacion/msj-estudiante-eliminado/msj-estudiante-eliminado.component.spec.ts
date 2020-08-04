import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEstudianteEliminadoComponent } from './msj-estudiante-eliminado.component';

describe('MsjEstudianteEliminadoComponent', () => {
  let component: MsjEstudianteEliminadoComponent;
  let fixture: ComponentFixture<MsjEstudianteEliminadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjEstudianteEliminadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEstudianteEliminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
