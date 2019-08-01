import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { User } from 'src/app/models/user';
import { CoordinadorLideresConsultarComponent } from './coordinador-lideres-consultar/coordinador-lideres-consultar.component';

@Component({
  selector: 'app-administrar-lideres',
  templateUrl: './administrar-lideres.component.html',
  styleUrls: ['./administrar-lideres.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarLideresComponent implements OnInit {
  @ViewChild('coordinadorLideresConsultar') coordinadorLideresConsultar: CoordinadorLideresConsultarComponent;

  constructor() { }

  ngOnInit() {
  }

  onSubordinateElected(subordinate: User) {
    this.coordinadorLideresConsultar.fetchSubordinates(subordinate);
  }

}
