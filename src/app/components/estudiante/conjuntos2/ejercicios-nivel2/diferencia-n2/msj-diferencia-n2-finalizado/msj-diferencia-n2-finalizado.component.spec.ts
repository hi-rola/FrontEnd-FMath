import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjDiferenciaN2FinalizadoComponent } from './msj-diferencia-n2-finalizado.component';

describe('MsjDiferenciaN2FinalizadoComponent', () => {
  let component: MsjDiferenciaN2FinalizadoComponent;
  let fixture: ComponentFixture<MsjDiferenciaN2FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjDiferenciaN2FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjDiferenciaN2FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
