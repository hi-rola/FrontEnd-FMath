import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjDiferenciaSimetricaN1FinalizadoComponent } from './msj-diferencia-simetrica-n1-finalizado.component';

describe('MsjDiferenciaSimetricaN1FinalizadoComponent', () => {
  let component: MsjDiferenciaSimetricaN1FinalizadoComponent;
  let fixture: ComponentFixture<MsjDiferenciaSimetricaN1FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjDiferenciaSimetricaN1FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjDiferenciaSimetricaN1FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
