import { NgModule } from '@angular/core';
import { ChartsModule } from '../charts/charts.module';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { ReportesDiaDComponent } from './reportes-dia-d.component';

@NgModule({
    imports: [CommonModule, PageHeaderModule, ChartsModule],
    declarations: [ReportesDiaDComponent]
})
export class ReportesDiaDModule { }
