import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesDiaDComponent } from './reportes-dia-d.component';

describe('ReportesDiaDComponent', () => {
  let component: ReportesDiaDComponent;
  let fixture: ComponentFixture<ReportesDiaDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesDiaDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesDiaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
