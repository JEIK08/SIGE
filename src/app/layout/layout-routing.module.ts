import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ReportesDiaDComponent } from './reportes-dia-d/reportes-dia-d.component';
import { ReportesCampaniaLogisticosComponent } from './reportes-campania-logisticos/reportes-campania-logisticos.component';
import { ReportesCampaniaLocalidadesComponent } from './reportes-campania-localidades/reportes-campania-localidades.component';
import { AdministrarEventoComponent } from './administrar-evento/administrar-evento.component';
import { AdministrarGastosComponent } from './administrar-gastos/administrar-gastos.component';
import { AdministrarPresupuestoComponent } from './administrar-presupuesto/administrar-presupuesto.component';
import { AdministrarVotantesComponent } from './administrar-votantes/administrar-votantes.component';
import { AdministrarLideresComponent } from './administrar-lideres/administrar-lideres.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'reports/diad', component: ReportesDiaDComponent },
            { path: 'reports/campania/logistico', component: ReportesCampaniaLogisticosComponent },
            { path: 'reports/campania/localidad', component: ReportesCampaniaLocalidadesComponent },
            { path: 'administrar/eventos', component: AdministrarEventoComponent },
            { path: 'administrar/gastos', component: AdministrarGastosComponent },
            { path: 'administrar/presupuesto', component: AdministrarPresupuestoComponent },
            { path: 'administrar/votantes', component: AdministrarVotantesComponent },
            { path: 'administrar/lideres', component: AdministrarLideresComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
