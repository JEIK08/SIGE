import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from '../../tables/table/table.module';
import { CoordinadorLideresInformacionComponent } from './coordinador-lideres-informacion.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule],
    declarations: [CoordinadorLideresInformacionComponent],
    exports: [CoordinadorLideresInformacionComponent]
})
export class CoorLideresInformacionModule { }
