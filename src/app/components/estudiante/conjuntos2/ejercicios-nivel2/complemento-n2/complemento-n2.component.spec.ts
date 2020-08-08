import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementoN2Component } from './complemento-n2.component';

describe('ComplementoN2Component', () => {
  let component: ComplementoN2Component;
  let fixture: ComponentFixture<ComplementoN2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementoN2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementoN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
