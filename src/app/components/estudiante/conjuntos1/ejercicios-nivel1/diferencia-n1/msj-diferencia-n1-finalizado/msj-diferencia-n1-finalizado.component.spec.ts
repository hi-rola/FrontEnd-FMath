import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjDiferenciaN1FinalizadoComponent } from './msj-diferencia-n1-finalizado.component';

describe('MsjDiferenciaN1FinalizadoComponent', () => {
  let component: MsjDiferenciaN1FinalizadoComponent;
  let fixture: ComponentFixture<MsjDiferenciaN1FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjDiferenciaN1FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjDiferenciaN1FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
