import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorEventoInformacionComponent } from './coordinador-evento-informacion.component';

describe('CoordinadorEventoInformacionComponent', () => {
  let component: CoordinadorEventoInformacionComponent;
  let fixture: ComponentFixture<CoordinadorEventoInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorEventoInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorEventoInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
