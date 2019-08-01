import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { TableModule } from '../tables/table/table.module';
import { AdministrarLideresComponent } from './administrar-lideres.component';
import { CoorLideresInformacionModule } from './coordinador-lideres-informacion/coor-lideres-informacion.module';
import { CoorLideresConsultarModule } from './coordinador-lideres-consultar/coor-lideres-consultar.module';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        TableModule,
        CoorLideresInformacionModule,
        CoorLideresConsultarModule],
    declarations: [AdministrarLideresComponent],
    exports: [AdministrarLideresComponent]
})
export class AdministrarLideresModule { }
