import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from '../../tables/table/table.module';
import { CoordinadorGastosInformacionComponent } from './coordinador-gastos-informacion.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule],
    declarations: [CoordinadorGastosInformacionComponent],
    exports: [CoordinadorGastosInformacionComponent]
})
export class CoorGastosInformacionModule { }
