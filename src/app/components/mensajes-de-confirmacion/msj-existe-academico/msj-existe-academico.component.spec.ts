import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjExisteAcademicoComponent } from './msj-existe-academico.component';

describe('MsjExisteAcademicoComponent', () => {
  let component: MsjExisteAcademicoComponent;
  let fixture: ComponentFixture<MsjExisteAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjExisteAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjExisteAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
