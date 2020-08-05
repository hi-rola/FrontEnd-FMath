import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjInterseccionN2FinalizadoComponent } from './msj-interseccion-n2-finalizado.component';

describe('MsjInterseccionN2FinalizadoComponent', () => {
  let component: MsjInterseccionN2FinalizadoComponent;
  let fixture: ComponentFixture<MsjInterseccionN2FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjInterseccionN2FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjInterseccionN2FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
