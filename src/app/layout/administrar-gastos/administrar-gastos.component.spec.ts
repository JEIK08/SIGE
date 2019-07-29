import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarGastosComponent } from './administrar-gastos.component';

describe('AdministrarGastosComponent', () => {
  let component: AdministrarGastosComponent;
  let fixture: ComponentFixture<AdministrarGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
