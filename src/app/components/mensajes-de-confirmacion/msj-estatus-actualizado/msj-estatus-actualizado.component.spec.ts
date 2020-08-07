import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEstatusActualizadoComponent } from './msj-estatus-actualizado.component';

describe('MsjEstatusActualizadoComponent', () => {
  let component: MsjEstatusActualizadoComponent;
  let fixture: ComponentFixture<MsjEstatusActualizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjEstatusActualizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEstatusActualizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
