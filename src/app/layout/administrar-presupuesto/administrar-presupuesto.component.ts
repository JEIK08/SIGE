import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-administrar-presupuesto',
  templateUrl: './administrar-presupuesto.component.html',
  styleUrls: ['./administrar-presupuesto.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarPresupuestoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
