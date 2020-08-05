import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjDiferenciaSimetricaN2FinalizadoComponent } from './msj-diferencia-simetrica-n2-finalizado.component';

describe('MsjDiferenciaSimetricaN2FinalizadoComponent', () => {
  let component: MsjDiferenciaSimetricaN2FinalizadoComponent;
  let fixture: ComponentFixture<MsjDiferenciaSimetricaN2FinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsjDiferenciaSimetricaN2FinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjDiferenciaSimetricaN2FinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
