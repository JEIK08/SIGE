import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoordinadorVotantesVotanteComponent } from './coordinador-votantes-votante.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule],
    declarations: [CoordinadorVotantesVotanteComponent],
    exports: [CoordinadorVotantesVotanteComponent]
})
export class CoorVotantesVotanteModule { }
