import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorGastosConsultarComponent } from './coordinador-gastos-consultar.component';

describe('CoordinadorGastosConsultarComponent', () => {
  let component: CoordinadorGastosConsultarComponent;
  let fixture: ComponentFixture<CoordinadorGastosConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorGastosConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorGastosConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
