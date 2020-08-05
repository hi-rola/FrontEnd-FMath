import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaDiferenciaSimetricaComponent } from './teoria-diferencia-simetrica.component';

describe('TeoriaDiferenciaSimetricaComponent', () => {
  let component: TeoriaDiferenciaSimetricaComponent;
  let fixture: ComponentFixture<TeoriaDiferenciaSimetricaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeoriaDiferenciaSimetricaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoriaDiferenciaSimetricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
