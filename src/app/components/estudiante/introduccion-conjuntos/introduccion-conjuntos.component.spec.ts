import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionConjuntosComponent } from './introduccion-conjuntos.component';

describe('IntroduccionConjuntosComponent', () => {
  let component: IntroduccionConjuntosComponent;
  let fixture: ComponentFixture<IntroduccionConjuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduccionConjuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduccionConjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
