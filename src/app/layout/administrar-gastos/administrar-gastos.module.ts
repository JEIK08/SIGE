import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { TableModule } from '../tables/table/table.module';
import { AdministrarGastosComponent } from './administrar-gastos.component';
import { CoorGastosInformacionModule } from './coordinador-gastos-informacion/coor-gastos-infor.module';
import { CoorGastosConsultarModule } from './coordinador-gastos-consultar/coor-gastos-consultar.module';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        TableModule,
        CoorGastosInformacionModule,
        CoorGastosConsultarModule],
    declarations: [AdministrarGastosComponent],
    exports: [AdministrarGastosComponent]
})
export class AdministrarGastosModule { }
