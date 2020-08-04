import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionTeoriaElementalComponent } from './informacion-teoria-elemental.component';

describe('InformacionTeoriaElementalComponent', () => {
  let component: InformacionTeoriaElementalComponent;
  let fixture: ComponentFixture<InformacionTeoriaElementalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionTeoriaElementalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionTeoriaElementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
