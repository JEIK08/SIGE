import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarLideresComponent } from './administrar-lideres.component';

describe('AdministrarLideresComponent', () => {
  let component: AdministrarLideresComponent;
  let fixture: ComponentFixture<AdministrarLideresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarLideresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarLideresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
