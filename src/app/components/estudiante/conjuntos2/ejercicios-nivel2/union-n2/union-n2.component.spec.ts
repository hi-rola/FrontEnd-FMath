import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionN2Component } from './union-n2.component';

describe('UnionN2Component', () => {
  let component: UnionN2Component;
  let fixture: ComponentFixture<UnionN2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionN2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
