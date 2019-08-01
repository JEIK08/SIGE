import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorLideresConsultarComponent } from './coordinador-lideres-consultar.component';

describe('CoordinadorLideresConsultarComponent', () => {
  let component: CoordinadorLideresConsultarComponent;
  let fixture: ComponentFixture<CoordinadorLideresConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorLideresConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorLideresConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
