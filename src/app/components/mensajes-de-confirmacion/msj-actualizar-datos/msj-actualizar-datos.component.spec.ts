import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjActualizarDatosComponent } from './msj-actualizar-datos.component';

describe('MsjActualizarDatosComponent', () => {
  let component: MsjActualizarDatosComponent;
  let fixture: ComponentFixture<MsjActualizarDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjActualizarDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjActualizarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
