import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaInterseccionComponent } from './teoria-interseccion.component';

describe('TeoriaInterseccionComponent', () => {
  let component: TeoriaInterseccionComponent;
  let fixture: ComponentFixture<TeoriaInterseccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeoriaInterseccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoriaInterseccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
