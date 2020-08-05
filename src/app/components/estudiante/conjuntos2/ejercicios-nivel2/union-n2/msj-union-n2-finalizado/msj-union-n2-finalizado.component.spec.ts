import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjUnionN2FinalizadoComponent } from './msj-union-n2-finalizado.component';

describe('MsjUnionN2FinalizadoComponent', () => {
  let component: MsjUnionN2FinalizadoComponent;
  let fixture: ComponentFixture<MsjUnionN2FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjUnionN2FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjUnionN2FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
