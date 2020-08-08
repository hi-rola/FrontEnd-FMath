import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjComplementoN2FinalizadoComponent } from './msj-complemento-n2-finalizado.component';

describe('MsjComplementoN2FinalizadoComponent', () => {
  let component: MsjComplementoN2FinalizadoComponent;
  let fixture: ComponentFixture<MsjComplementoN2FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjComplementoN2FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjComplementoN2FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
