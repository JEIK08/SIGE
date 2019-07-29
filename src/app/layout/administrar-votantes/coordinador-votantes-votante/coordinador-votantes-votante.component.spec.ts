import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorVotantesVotanteComponent } from './coordinador-votantes-votante.component';

describe('CoordinadorVotantesVotanteComponent', () => {
  let component: CoordinadorVotantesVotanteComponent;
  let fixture: ComponentFixture<CoordinadorVotantesVotanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorVotantesVotanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorVotantesVotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
