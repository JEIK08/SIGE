import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarEventoComponent } from './administrar-evento.component';
import { PageHeaderModule } from 'src/app/shared';
import { CoordinadorEventoInformacionComponent } from './coordinador-evento-informacion/coordinador-evento-informacion.component';
import { CoorEventInfoModule } from './coordinador-evento-informacion/coor-event-info.module';
import { CoorEventConsultar } from './coordinador-evento-consultar/coor-event-consultar.module';
import { CoorEventInfoInvitadosModule } from './coordinador-evento-informacion-invitados/coor-event-info-invitados.module';
import { CoorEventInfoGastosModule } from './coordinador-evento-informacion-gastos/coor-event-info-gastos.module';
import { TableModule } from '../tables/table/table.module';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        CoorEventInfoModule,
        CoorEventConsultar,
        CoorEventInfoGastosModule,
        CoorEventInfoInvitadosModule,
        TableModule],
    declarations: [AdministrarEventoComponent],
    exports: [AdministrarEventoComponent]
})
export class AdministrarEventoModule { }
