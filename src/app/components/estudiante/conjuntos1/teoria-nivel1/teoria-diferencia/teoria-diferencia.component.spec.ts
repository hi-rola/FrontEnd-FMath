import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaDiferenciaComponent } from './teoria-diferencia.component';

describe('TeoriaDiferenciaComponent', () => {
  let component: TeoriaDiferenciaComponent;
  let fixture: ComponentFixture<TeoriaDiferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeoriaDiferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoriaDiferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
