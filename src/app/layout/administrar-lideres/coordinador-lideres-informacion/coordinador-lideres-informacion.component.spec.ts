import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorLideresInformacionComponent } from './coordinador-lideres-informacion.component';

describe('CoordinadorLideresInformacionComponent', () => {
  let component: CoordinadorLideresInformacionComponent;
  let fixture: ComponentFixture<CoordinadorLideresInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorLideresInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorLideresInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
