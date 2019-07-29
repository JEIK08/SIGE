import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from '../../tables/table/table.module';
import { CoordinadorPresupuestoConsultarComponent } from './coordinador-presupuesto-consultar.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule],
    declarations: [CoordinadorPresupuestoConsultarComponent],
    exports: [CoordinadorPresupuestoConsultarComponent]
})
export class CoorPresupuestoConsultarModule { }
