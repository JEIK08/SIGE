import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorEventoInformacionInvitadosComponent } from './coordinador-evento-informacion-invitados.component';

describe('CoordinadorEventoInformacionInvitadosComponent', () => {
  let component: CoordinadorEventoInformacionInvitadosComponent;
  let fixture: ComponentFixture<CoordinadorEventoInformacionInvitadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorEventoInformacionInvitadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorEventoInformacionInvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
