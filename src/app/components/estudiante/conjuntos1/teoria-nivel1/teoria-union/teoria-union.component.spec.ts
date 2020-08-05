import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaUnionComponent } from './teoria-union.component';

describe('TeoriaUnionComponent', () => {
  let component: TeoriaUnionComponent;
  let fixture: ComponentFixture<TeoriaUnionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeoriaUnionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoriaUnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
