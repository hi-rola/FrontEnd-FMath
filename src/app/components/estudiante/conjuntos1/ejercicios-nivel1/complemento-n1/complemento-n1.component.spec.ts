import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementoN1Component } from './complemento-n1.component';

describe('ComplementoN1Component', () => {
  let component: ComplementoN1Component;
  let fixture: ComponentFixture<ComplementoN1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementoN1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementoN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
