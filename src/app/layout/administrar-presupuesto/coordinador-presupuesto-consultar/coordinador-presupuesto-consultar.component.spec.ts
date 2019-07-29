import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorPresupuestoConsultarComponent } from './coordinador-presupuesto-consultar.component';

describe('CoordinadorPresupuestoConsultarComponent', () => {
  let component: CoordinadorPresupuestoConsultarComponent;
  let fixture: ComponentFixture<CoordinadorPresupuestoConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorPresupuestoConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorPresupuestoConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
