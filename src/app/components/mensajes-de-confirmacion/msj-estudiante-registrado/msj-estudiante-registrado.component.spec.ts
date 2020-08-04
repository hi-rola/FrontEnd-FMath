import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEstudianteRegistradoComponent } from './msj-estudiante-registrado.component';

describe('MsjEstudianteRegistradoComponent', () => {
  let component: MsjEstudianteRegistradoComponent;
  let fixture: ComponentFixture<MsjEstudianteRegistradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjEstudianteRegistradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEstudianteRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
