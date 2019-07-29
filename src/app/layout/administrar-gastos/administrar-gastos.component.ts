import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CoordinadorGastosConsultarComponent } from './coordinador-gastos-consultar/coordinador-gastos-consultar.component';
import { Cost } from 'src/app/models/cost';

@Component({
  selector: 'app-administrar-gastos',
  templateUrl: './administrar-gastos.component.html',
  styleUrls: ['./administrar-gastos.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarGastosComponent implements OnInit {
  @ViewChild('coordinadorGastosConsultar') coordinadorGastosConsultar: CoordinadorGastosConsultarComponent;

  constructor() { }

  ngOnInit() {
  }

  onCostCreated(cost: Cost) {
    this.coordinadorGastosConsultar.insertCost(cost);
  }


}
