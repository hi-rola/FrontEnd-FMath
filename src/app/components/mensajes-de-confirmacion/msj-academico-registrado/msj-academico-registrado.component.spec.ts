import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjAcademicoRegistradoComponent } from './msj-academico-registrado.component';

describe('MsjAcademicoRegistradoComponent', () => {
  let component: MsjAcademicoRegistradoComponent;
  let fixture: ComponentFixture<MsjAcademicoRegistradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjAcademicoRegistradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjAcademicoRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
