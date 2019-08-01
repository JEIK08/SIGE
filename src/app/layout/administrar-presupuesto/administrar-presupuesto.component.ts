import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CoordinadorPresupuestoInformacionComponent } from './coordinador-presupuesto-informacion/coordinador-presupuesto-informacion.component';
import { CoordinadorPresupuestoConsultarComponent } from './coordinador-presupuesto-consultar/coordinador-presupuesto-consultar.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-administrar-presupuesto',
  templateUrl: './administrar-presupuesto.component.html',
  styleUrls: ['./administrar-presupuesto.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarPresupuestoComponent implements OnInit {
  @ViewChild('coordinadorPresupuestoInformacion') coordinadorPresupuestoInformacion: CoordinadorPresupuestoInformacionComponent;
  @ViewChild('coordinadorPresupuestoConsultar') coordinadorPresupuestoConsultar: CoordinadorPresupuestoConsultarComponent;

  constructor() { }

  ngOnInit() {
  }

  onEdit(user: User) {
    this.coordinadorPresupuestoInformacion.subordinate = user;
  }

  onUserEdited(user: User) {
    console.log('Usuario recibido en coordinador-presupuesto');
    console.log(user);
    this.coordinadorPresupuestoConsultar.updateUser(user);
  }

}
