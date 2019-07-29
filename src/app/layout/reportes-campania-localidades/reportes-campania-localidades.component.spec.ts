import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesCampaniaLocalidadesComponent } from './reportes-campania-localidades.component';

describe('ReportesCampaniaLocalidadesComponent', () => {
  let component: ReportesCampaniaLocalidadesComponent;
  let fixture: ComponentFixture<ReportesCampaniaLocalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportesCampaniaLocalidadesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesCampaniaLocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
