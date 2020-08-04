import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesRegistradosComponent } from './estudiantes-registrados.component';

describe('EstudiantesRegistradosComponent', () => {
  let component: EstudiantesRegistradosComponent;
  let fixture: ComponentFixture<EstudiantesRegistradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantesRegistradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
