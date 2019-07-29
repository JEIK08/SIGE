import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorVotantesVotantesPorLiderComponent } from './coordinador-votantes-votantes-por-lider.component';

describe('CoordinadorVotantesVotantesPorLiderComponent', () => {
  let component: CoordinadorVotantesVotantesPorLiderComponent;
  let fixture: ComponentFixture<CoordinadorVotantesVotantesPorLiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorVotantesVotantesPorLiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorVotantesVotantesPorLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
