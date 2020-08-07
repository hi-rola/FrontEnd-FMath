import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Encabezado401Component } from './encabezado401.component';

describe('Encabezado401Component', () => {
  let component: Encabezado401Component;
  let fixture: ComponentFixture<Encabezado401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Encabezado401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Encabezado401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
