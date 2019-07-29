import { NgModule } from '@angular/core';
import { ChartsModule } from '../charts/charts.module';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { ReportesCampaniaLogisticosComponent } from './reportes-campania-logisticos.component';

@NgModule({
    imports: [CommonModule, PageHeaderModule, ChartsModule],
    declarations: [ReportesCampaniaLogisticosComponent]
})
export class ReportesCampaniaLogisticosModule { }
