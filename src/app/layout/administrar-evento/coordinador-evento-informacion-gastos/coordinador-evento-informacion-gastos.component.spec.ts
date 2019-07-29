import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorEventoInformacionGastosComponent } from './coordinador-evento-informacion-gastos.component';

describe('CoordinadorEventoInformacionGastosComponent', () => {
  let component: CoordinadorEventoInformacionGastosComponent;
  let fixture: ComponentFixture<CoordinadorEventoInformacionGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorEventoInformacionGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorEventoInformacionGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
