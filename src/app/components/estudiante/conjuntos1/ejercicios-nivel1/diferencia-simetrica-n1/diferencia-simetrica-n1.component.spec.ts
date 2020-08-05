import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaSimetricaN1Component } from './diferencia-simetrica-n1.component';

describe('DiferenciaSimetricaN1Component', () => {
  let component: DiferenciaSimetricaN1Component;
  let fixture: ComponentFixture<DiferenciaSimetricaN1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiferenciaSimetricaN1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciaSimetricaN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
