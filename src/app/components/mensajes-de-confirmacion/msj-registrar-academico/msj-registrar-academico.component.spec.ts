import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjRegistrarAcademicoComponent } from './msj-registrar-academico.component';

describe('MsjRegistrarAcademicoComponent', () => {
  let component: MsjRegistrarAcademicoComponent;
  let fixture: ComponentFixture<MsjRegistrarAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjRegistrarAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjRegistrarAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
