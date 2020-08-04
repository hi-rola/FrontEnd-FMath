import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjCancelarRegistroComponent } from './msj-cancelar-registro.component';

describe('MsjCancelarRegistroComponent', () => {
  let component: MsjCancelarRegistroComponent;
  let fixture: ComponentFixture<MsjCancelarRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjCancelarRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjCancelarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
