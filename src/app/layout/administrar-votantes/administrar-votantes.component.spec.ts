import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarVotantesComponent } from './administrar-votantes.component';

describe('AdministrarVotantesComponent', () => {
  let component: AdministrarVotantesComponent;
  let fixture: ComponentFixture<AdministrarVotantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarVotantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarVotantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
