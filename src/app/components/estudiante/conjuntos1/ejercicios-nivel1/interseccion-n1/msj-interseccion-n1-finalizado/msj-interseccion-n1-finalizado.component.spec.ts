import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjInterseccionN1FinalizadoComponent } from './msj-interseccion-n1-finalizado.component';

describe('MsjInterseccionN1FinalizadoComponent', () => {
  let component: MsjInterseccionN1FinalizadoComponent;
  let fixture: ComponentFixture<MsjInterseccionN1FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjInterseccionN1FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjInterseccionN1FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
