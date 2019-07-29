import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarPresupuestoComponent } from './administrar-presupuesto.component';

describe('AdministrarPresupuestoComponent', () => {
  let component: AdministrarPresupuestoComponent;
  let fixture: ComponentFixture<AdministrarPresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarPresupuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
