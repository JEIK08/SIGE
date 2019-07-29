import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { TableModule } from '../tables/table/table.module';
import { CoorPresupuestoConsultarModule } from './coordinador-presupuesto-consultar/coor-presupuesto-consultar.module';
import { CoorPresupuestoInfoModule } from './coordinador-presupuesto-informacion/coor-presupuesto-infor.module';
import { AdministrarPresupuestoComponent } from './administrar-presupuesto.component';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        TableModule,
        CoorPresupuestoConsultarModule,
        CoorPresupuestoInfoModule],
    declarations: [AdministrarPresupuestoComponent],
    exports: [AdministrarPresupuestoComponent]
})
export class AdministrarPresupuestoModule { }
