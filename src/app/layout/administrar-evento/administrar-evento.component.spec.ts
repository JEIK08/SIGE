import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarEventoComponent } from './administrar-evento.component';

describe('AdministrarEventoComponent', () => {
  let component: AdministrarEventoComponent;
  let fixture: ComponentFixture<AdministrarEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
