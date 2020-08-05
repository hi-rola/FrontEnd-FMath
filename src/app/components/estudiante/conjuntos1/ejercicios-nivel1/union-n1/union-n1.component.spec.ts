import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionN1Component } from './union-n1.component';

describe('UnionN1Component', () => {
  let component: UnionN1Component;
  let fixture: ComponentFixture<UnionN1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionN1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
