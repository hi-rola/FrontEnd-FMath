import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjResgistrarEstudianteComponent } from './msj-resgistrar-estudiante.component';

describe('MsjResgistrarEstudianteComponent', () => {
  let component: MsjResgistrarEstudianteComponent;
  let fixture: ComponentFixture<MsjResgistrarEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjResgistrarEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjResgistrarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
