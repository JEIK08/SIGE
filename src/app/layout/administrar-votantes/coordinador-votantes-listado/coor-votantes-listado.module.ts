import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoordinadorVotantesListadoComponent } from './coordinador-votantes-listado.component';
import { TableModule } from '../../tables/table/table.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule],
    declarations: [CoordinadorVotantesListadoComponent],
    exports: [CoordinadorVotantesListadoComponent]
})
export class CoorVotantesListadoModule { }
