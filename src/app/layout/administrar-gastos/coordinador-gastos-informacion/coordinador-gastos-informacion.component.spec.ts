import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorGastosInformacionComponent } from './coordinador-gastos-informacion.component';

describe('CoordinadorGastosInformacionComponent', () => {
  let component: CoordinadorGastosInformacionComponent;
  let fixture: ComponentFixture<CoordinadorGastosInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorGastosInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorGastosInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
