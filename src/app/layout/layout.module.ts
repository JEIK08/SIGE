import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AdministrarPresupuestoComponent } from './administrar-presupuesto/administrar-presupuesto.component';
import { AdministrarVotantesComponent } from './administrar-votantes/administrar-votantes.component';
import { AdministrarLideresComponent } from './administrar-lideres/administrar-lideres.component';
import { ReportesCampaniaLocalidadesModule } from './reportes-campania-localidades/reportes-campania-localidades.module';
import { ReportesDiaDModule } from './reportes-dia-d/reportes-dia-d.module';
import { ReportesCampaniaLogisticosModule } from './reportes-campania-logisticos/reportes-campania-logisticos.module';
import { AdministrarEventoModule } from './administrar-evento/administrar-evento.module';
import { PageHeaderModule } from '../shared';
import { AdministrarGastosModule } from './administrar-gastos/administrar-gastos.module';
import { AdministrarPresupuestoModule } from './administrar-presupuesto/administrar-presupuesto.module';
import { AdministrarVotantesModule } from './administrar-votantes/administrar-votantes.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        PageHeaderModule,
        ReportesCampaniaLocalidadesModule,
        ReportesDiaDModule,
        ReportesCampaniaLogisticosModule,
        AdministrarEventoModule,
        AdministrarGastosModule,
        AdministrarPresupuestoModule,
        AdministrarVotantesModule
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        AdministrarLideresComponent]
})
export class LayoutModule { }
