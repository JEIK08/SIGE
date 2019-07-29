import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinadorEventoInformacionComponent } from './coordinador-evento-informacion.component';
import { FormsModule } from '@angular/forms';
import { CoorEventInfoGastosModule } from '../coordinador-evento-informacion-gastos/coor-event-info-gastos.module';
import { CoorEventInfoInvitadosModule } from '../coordinador-evento-informacion-invitados/coor-event-info-invitados.module';
@NgModule({
    imports: [CommonModule, FormsModule, CoorEventInfoGastosModule, CoorEventInfoInvitadosModule],
    declarations: [CoordinadorEventoInformacionComponent],
    exports: [CoordinadorEventoInformacionComponent]
})
export class CoorEventInfoModule { }
