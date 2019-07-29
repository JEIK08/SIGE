import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CoordinadorEventoConsultarComponent } from './coordinador-evento-consultar/coordinador-evento-consultar.component';
import { Event } from 'src/app/models/event';
@Component({
  selector: 'app-administrar-evento',
  templateUrl: './administrar-evento.component.html',
  styleUrls: ['./administrar-evento.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarEventoComponent implements OnInit {
  @ViewChild('coordinadorEventoConsultar') coordinadorEventoConsultar: CoordinadorEventoConsultarComponent;

  constructor() { }

  ngOnInit() {
  }

  onEventCreated(event: Event) {
    this.coordinadorEventoConsultar.insertEvent(event);
  }

}
