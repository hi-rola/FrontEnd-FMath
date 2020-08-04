import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjCambiarEstatusComponent } from './msj-cambiar-estatus.component';

describe('MsjCambiarEstatusComponent', () => {
  let component: MsjCambiarEstatusComponent;
  let fixture: ComponentFixture<MsjCambiarEstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjCambiarEstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjCambiarEstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
