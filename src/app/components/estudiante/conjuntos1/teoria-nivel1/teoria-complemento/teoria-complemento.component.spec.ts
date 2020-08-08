import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaComplementoComponent } from './teoria-complemento.component';

describe('TeoriaComplementoComponent', () => {
  let component: TeoriaComplementoComponent;
  let fixture: ComponentFixture<TeoriaComplementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeoriaComplementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoriaComplementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
