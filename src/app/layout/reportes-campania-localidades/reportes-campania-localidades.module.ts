import { NgModule } from '@angular/core';
import { ReportesCampaniaLocalidadesComponent } from './reportes-campania-localidades.component';
import { ChartsModule } from '../charts/charts.module';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
    imports: [CommonModule, PageHeaderModule, ChartsModule],
    declarations: [ReportesCampaniaLocalidadesComponent]
})
export class ReportesCampaniaLocalidadesModule { }
