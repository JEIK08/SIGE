import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorEventoConsultarComponent } from './coordinador-evento-consultar.component';

describe('CoordinadorEventoConsultarComponent', () => {
  let component: CoordinadorEventoConsultarComponent;
  let fixture: ComponentFixture<CoordinadorEventoConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorEventoConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorEventoConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
