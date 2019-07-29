import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoordinadorEventoConsultarComponent } from './coordinador-evento-consultar.component';
import { TableModule } from '../../tables/table/table.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule],
    declarations: [CoordinadorEventoConsultarComponent],
    exports: [CoordinadorEventoConsultarComponent]
})
export class CoorEventConsultar { }
