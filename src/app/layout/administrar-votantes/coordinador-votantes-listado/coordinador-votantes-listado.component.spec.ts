import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorVotantesListadoComponent } from './coordinador-votantes-listado.component';

describe('CoordinadorVotantesListadoComponent', () => {
  let component: CoordinadorVotantesListadoComponent;
  let fixture: ComponentFixture<CoordinadorVotantesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorVotantesListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorVotantesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
