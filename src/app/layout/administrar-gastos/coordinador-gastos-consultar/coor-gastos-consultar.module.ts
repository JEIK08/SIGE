import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from '../../tables/table/table.module';
import { CoordinadorGastosConsultarComponent } from './coordinador-gastos-consultar.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule],
    declarations: [CoordinadorGastosConsultarComponent],
    exports: [CoordinadorGastosConsultarComponent]
})
export class CoorGastosConsultarModule { }
