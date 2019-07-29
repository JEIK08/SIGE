import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoorEventInfoGastosModule } from '../coordinador-evento-informacion-gastos/coor-event-info-gastos.module';
import { CoordinadorEventoInformacionInvitadosComponent } from './coordinador-evento-informacion-invitados.component';
import { TableModule } from '../../tables/table/table.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CoorEventInfoGastosModule,
        TableModule],
    declarations: [CoordinadorEventoInformacionInvitadosComponent],
    exports: [CoordinadorEventoInformacionInvitadosComponent]
})
export class CoorEventInfoInvitadosModule { }
