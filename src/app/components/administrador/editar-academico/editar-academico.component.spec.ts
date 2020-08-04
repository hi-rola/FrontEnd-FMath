import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAcademicoComponent } from './editar-academico.component';

describe('EditarAcademicoComponent', () => {
  let component: EditarAcademicoComponent;
  let fixture: ComponentFixture<EditarAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
