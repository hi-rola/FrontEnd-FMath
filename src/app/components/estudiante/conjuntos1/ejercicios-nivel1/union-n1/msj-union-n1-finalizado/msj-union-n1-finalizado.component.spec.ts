import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjUnionN1FinalizadoComponent } from './msj-union-n1-finalizado.component';

describe('MsjUnionN1FinalizadoComponent', () => {
  let component: MsjUnionN1FinalizadoComponent;
  let fixture: ComponentFixture<MsjUnionN1FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjUnionN1FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjUnionN1FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
