import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjCerrarSesionComponent } from './msj-cerrar-sesion.component';

describe('MsjCerrarSesionComponent', () => {
  let component: MsjCerrarSesionComponent;
  let fixture: ComponentFixture<MsjCerrarSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjCerrarSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjCerrarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
