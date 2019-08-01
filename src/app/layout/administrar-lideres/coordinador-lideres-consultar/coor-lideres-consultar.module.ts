import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from '../../tables/table/table.module';
import { CoordinadorLideresConsultarComponent } from './coordinador-lideres-consultar.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule],
    declarations: [CoordinadorLideresConsultarComponent],
    exports: [CoordinadorLideresConsultarComponent]
})
export class CoorLideresConsultarModule { }
