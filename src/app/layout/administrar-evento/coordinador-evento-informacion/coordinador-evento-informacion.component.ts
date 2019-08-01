import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { Cost } from 'src/app/models/cost';
import { EventService } from 'src/app/services/event.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { CoordinadorEventoInformacionGastosComponent } from '../coordinador-evento-informacion-gastos/coordinador-evento-informacion-gastos.component';
import { CoordinadorEventoInformacionInvitadosComponent } from '../coordinador-evento-informacion-invitados/coordinador-evento-informacion-invitados.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coordinador-evento-informacion',
  templateUrl: './coordinador-evento-informacion.component.html',
  styleUrls: ['./coordinador-evento-informacion.component.css']
})
export class CoordinadorEventoInformacionComponent implements OnInit {
  @ViewChild('coordinadorEventoInformacionGastos') coordinadorEventoInformacionGastos: CoordinadorEventoInformacionGastosComponent;
  @ViewChild('coordinadorEventoInformacionInvitados') coordinadorEventoInformacionInvitados: CoordinadorEventoInformacionInvitadosComponent;

  eventToCreate: Event = new Event();
  @Output() eventCreated: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() eventEdited: EventEmitter<Event> = new EventEmitter<Event>();

  guests: User[] = [];
  costs: Cost[] = [];
  mTimeBeginning: string;
  mTimeEnd: string;
  mDateBeginning: string;
  mDateEnd: string;
  public showInvitados = false;
  public showGastos = false;

  get dateBeginning(): string {
    return this.mDateBeginning;
  }

  set dateBeginning(date: string) {
    this.mDateBeginning = date;
    if (this.dateBeginning && this.timeBeginning) {
      this.eventToCreate.dateBeginning = new Date(this.dateBeginning + ' ' + this.timeBeginning);
      console.log('timeDate: ' + this.dateBeginning + ' ' + this.mTimeBeginning + ' ' + this.eventToCreate.dateBeginning);
      console.log('evento:');
      console.log(this.eventToCreate);
    }
    console.log('date beginning: ' + this.dateBeginning);
  }

  get dateEnd(): string {
    return this.mDateEnd;
  }

  set dateEnd(date: string) {
    this.mDateEnd = date;
    if (this.dateEnd && this.timeEnd) {
      this.eventToCreate.dateEnd = new Date(this.dateEnd + ' ' + this.timeEnd);
      console.log('timeDate: ' + this.dateEnd + ' ' + this.timeEnd + ' ' + this.eventToCreate.dateEnd);
      console.log('evento:');
      console.log(this.eventToCreate);
    }
    console.log('date end: ' + this.dateEnd);
  }

  get timeBeginning(): string {
    return this.mTimeBeginning;
  }

  set timeBeginning(time: string) {
    this.mTimeBeginning = time;
    if (this.dateBeginning && this.timeBeginning) {
      this.eventToCreate.dateBeginning = new Date(this.dateBeginning + ' ' + this.timeBeginning);
      console.log('timeDate: ' + this.dateBeginning + ' ' + this.mTimeBeginning + ' ' + this.eventToCreate.dateBeginning);
      console.log('evento:');
      console.log(this.eventToCreate);
    }
    console.log('time beginning: ' + this.timeBeginning);
  }

  get timeEnd(): string {
    return this.mTimeEnd;
  }

  set timeEnd(time: string) {
    this.mTimeEnd = time;
    if (this.dateEnd && this.dateEnd) {
      this.eventToCreate.dateEnd = new Date(this.dateEnd + ' ' + this.timeEnd);
      console.log('timeDate: ' + this.dateEnd + ' ' + this.timeEnd + ' ' + this.eventToCreate.dateEnd);
      console.log('evento:');
      console.log(this.eventToCreate);
    }
    console.log('time end: ' + this.timeEnd);
  }

  constructor(private eventService: EventService, public dataService: DataSharingService) { }

  ngOnInit() {
  }

  onGuestAdded(guests: User[]) {
    this.guests = guests;
  }

  onCostEmitted(costs: Cost[]) {
    this.costs = costs;
  }

  onSubmit() {
    this.eventService.postEvent(this.eventToCreate, this.guests, this.costs, this.dataService.serviceData).subscribe(data => {
      console.log('Evento creado');
      const createdEvent: Event = new Event(data);
      this.eventCreated.emit(createdEvent);
      this.eventToCreate = new Event();
      this.guests = [];
      this.costs = [];
      Swal.fire('Operación exitosa!', 'Evento creado con éxito!', 'success');
    },
    err => {
      console.log('Error:');
      console.log(err);
      Swal.fire('Error', 'No se pudo crear el evento', 'error');
    });
  }

  onEdit() {
    this.eventService.editEvent(this.eventToCreate, this.guests, this.costs, this.dataService.serviceData).subscribe(data => {
      console.log('Evento editado');
      this.eventEdited.emit(this.eventToCreate);
      this.eventToCreate = new Event();
      this.guests = [];
      this.costs = [];
      Swal.fire('Operación exitosa!', 'Evento editado con éxito!', 'success');
    },
    err => {
      console.log('Error:');
      console.log(err);
      Swal.fire('Error', 'No se pudo editar el evento', 'error');
    });
  }

  showEspecifications(option: boolean) {
    option ? (this.showGastos = !this.showGastos) : (this.showInvitados = !this.showInvitados);
  }

}
