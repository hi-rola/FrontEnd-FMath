import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjComplementoN1FinalizadoComponent } from './msj-complemento-n1-finalizado.component';

describe('MsjComplementoN1FinalizadoComponent', () => {
  let component: MsjComplementoN1FinalizadoComponent;
  let fixture: ComponentFixture<MsjComplementoN1FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjComplementoN1FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjComplementoN1FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
