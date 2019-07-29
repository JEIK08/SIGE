import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoordinadorEventoInformacionGastosComponent } from './coordinador-evento-informacion-gastos.component';
import { TableModule } from '../../tables/table/table.module';
@NgModule({
    imports: [CommonModule, FormsModule,
        TableModule],
    declarations: [CoordinadorEventoInformacionGastosComponent],
    exports: [CoordinadorEventoInformacionGastosComponent]
})
export class CoorEventInfoGastosModule { }
