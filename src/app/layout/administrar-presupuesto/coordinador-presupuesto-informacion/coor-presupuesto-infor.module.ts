import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from '../../tables/table/table.module';
import { CoordinadorPresupuestoInformacionComponent } from './coordinador-presupuesto-informacion.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule],
    declarations: [CoordinadorPresupuestoInformacionComponent],
    exports: [CoordinadorPresupuestoInformacionComponent]
})
export class CoorPresupuestoInfoModule { }
