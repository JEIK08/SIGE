import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorPresupuestoInformacionComponent } from './coordinador-presupuesto-informacion.component';

describe('CoordinadorPresupuestoInformacionComponent', () => {
  let component: CoordinadorPresupuestoInformacionComponent;
  let fixture: ComponentFixture<CoordinadorPresupuestoInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorPresupuestoInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorPresupuestoInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
