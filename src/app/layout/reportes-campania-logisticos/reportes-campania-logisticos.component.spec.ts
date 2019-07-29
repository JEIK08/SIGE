import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesCampaniaLogisticosComponent } from './reportes-campania-logisticos.component';

describe('ReportesCampaniaLogisticosComponent', () => {
  let component: ReportesCampaniaLogisticosComponent;
  let fixture: ComponentFixture<ReportesCampaniaLogisticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesCampaniaLogisticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesCampaniaLogisticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
