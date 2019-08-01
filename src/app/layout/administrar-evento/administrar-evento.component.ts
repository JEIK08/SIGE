import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CoordinadorEventoConsultarComponent } from './coordinador-evento-consultar/coordinador-evento-consultar.component';
import { Event } from 'src/app/models/event';
import { Cost } from 'src/app/models/cost';
import { User } from 'src/app/models/user';
import { EventService } from 'src/app/services/event.service';
import { CoordinadorEventoInformacionComponent } from './coordinador-evento-informacion/coordinador-evento-informacion.component';
@Component({
  selector: 'app-administrar-evento',
  templateUrl: './administrar-evento.component.html',
  styleUrls: ['./administrar-evento.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarEventoComponent implements OnInit {
  @ViewChild('coordinadorEventoConsultar') coordinadorEventoConsultar: CoordinadorEventoConsultarComponent;
  @ViewChild('coordinadorEventoInformacion') coordinadorEventoInformacion: CoordinadorEventoInformacionComponent;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  onEventCreated(event: Event) {
    this.coordinadorEventoConsultar.insertEvent(event);
  }

  onEventEdited(event: Event) {
    this.coordinadorEventoConsultar.updateEvent(event);
  }

  onEdit(event: Event) {
    this.coordinadorEventoInformacion.eventToCreate = event;

    let year: string = '' + event.dateBeginning.getFullYear();
    let month: string = '' + event.dateBeginning.getMonth();
    month = month.length > 1 ? month : '0' + month;
    let day: string = '' + event.dateBeginning.getDate();
    day = day.length > 1 ? day : '0' + day;
    this.coordinadorEventoInformacion.dateBeginning = `${year}-${month}-${day}`;

    year = '' + event.dateEnd.getFullYear();
    month = '' + event.dateEnd.getMonth();
    month = month.length > 1 ? month : '0' + month;
    day = '' + event.dateEnd.getDate();
    day = day.length > 1 ? day : '0' + day;
    this.coordinadorEventoInformacion.dateEnd = `${year}-${month}-${day}`;

    let hours: string = '' + event.dateBeginning.getHours();
    hours = hours.length > 1 ? hours : '0' + hours;
    let minutes: string = '' + event.dateBeginning.getMinutes();
    minutes = minutes.length > 1 ? minutes : '0' + minutes;

    this.coordinadorEventoInformacion.timeBeginning = `${hours}:${minutes}`;

    hours = '' + event.dateEnd.getHours();
    hours = hours.length > 1 ? hours : '0' + hours;
    minutes = '' + event.dateEnd.getMinutes();
    minutes = minutes.length > 1 ? minutes : '0' + minutes;
    this.coordinadorEventoInformacion.timeEnd = `${hours}:${minutes}`;

    this.eventService.getCosts(event).subscribe((pCosts: Cost[]) => {
      const costs = pCosts.map(c => new Cost(c));
      console.log('COSTS');
      console.log(costs);
      this.coordinadorEventoInformacion.coordinadorEventoInformacionGastos.costsAdded = costs;
      this.coordinadorEventoInformacion.costs = costs;
      console.log('COSTS INSIDE');
      console.log(this.coordinadorEventoInformacion.costs);
      console.log('COSTS INSIDE INSIDE');
      console.log(this.coordinadorEventoInformacion.coordinadorEventoInformacionGastos.costsAdded);
    });

    this.eventService.getGuests(event).subscribe((pGuests: User[]) => {
      console.log(pGuests[0]);
      const guests = pGuests.map(g => new User(g));
      console.log('GUESTS');
      console.log(guests);
      this.coordinadorEventoInformacion.coordinadorEventoInformacionInvitados.usersAdded = guests;
      this.coordinadorEventoInformacion.guests = guests;
      console.log('GUESTS INSIDE');
      console.log(this.coordinadorEventoInformacion.guests);
      console.log('GUESTS INSIDE INSIDE');
      console.log(this.coordinadorEventoInformacion.coordinadorEventoInformacionInvitados.usersAdded);
    });
  }

}
