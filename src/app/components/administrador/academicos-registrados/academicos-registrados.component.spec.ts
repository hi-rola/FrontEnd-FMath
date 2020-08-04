import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicosRegistradosComponent } from './academicos-registrados.component';

describe('AcademicosRegistradosComponent', () => {
  let component: AcademicosRegistradosComponent;
  let fixture: ComponentFixture<AcademicosRegistradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicosRegistradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicosRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
