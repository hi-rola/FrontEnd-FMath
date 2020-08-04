import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEstudianteExisteComponent } from './msj-estudiante-existe.component';

describe('MsjEstudianteExisteComponent', () => {
  let component: MsjEstudianteExisteComponent;
  let fixture: ComponentFixture<MsjEstudianteExisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjEstudianteExisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEstudianteExisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
