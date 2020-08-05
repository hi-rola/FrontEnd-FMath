import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaSimetricaN2Component } from './diferencia-simetrica-n2.component';

describe('DiferenciaSimetricaN2Component', () => {
  let component: DiferenciaSimetricaN2Component;
  let fixture: ComponentFixture<DiferenciaSimetricaN2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiferenciaSimetricaN2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciaSimetricaN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
