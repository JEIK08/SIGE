import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { TableModule } from '../tables/table/table.module';
import { CoorVotantesListadoModule } from './coordinador-votantes-listado/coor-votantes-listado.module';
import { CoorVotantesVotanteModule } from './coordinador-votantes-votante/coor-votantes-votantes.module';
import { AdministrarVotantesComponent } from './administrar-votantes.component';
import { CoorVotantesVotantesxLiderModule } from './coordinador-votantes-votantes-por-lider/coor-votantes-votantesxlider-module';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        TableModule,
        CoorVotantesListadoModule,
        CoorVotantesVotanteModule,
        CoorVotantesVotantesxLiderModule],
    declarations: [AdministrarVotantesComponent],
    exports: [AdministrarVotantesComponent]
})
export class AdministrarVotantesModule { }
