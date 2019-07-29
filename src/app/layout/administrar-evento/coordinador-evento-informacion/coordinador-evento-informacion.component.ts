import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { Cost } from 'src/app/models/cost';
import { EventService } from 'src/app/services/event.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-coordinador-evento-informacion',
  templateUrl: './coordinador-evento-informacion.component.html',
  styleUrls: ['./coordinador-evento-informacion.component.css']
})
export class CoordinadorEventoInformacionComponent implements OnInit {
  eventToCreate: Event = new Event();
  @Output() eventCreated: EventEmitter<Event> = new EventEmitter<Event>();

  guests: User[] = [];
  costs: Cost[] = [];
  _timeBeginning: string;
  _timeEnd: string;
  _dateBeginning: string;
  _dateEnd: string;
  public showInvitados = false;
  public showGastos = false;

  get dateBeginning(): string {
    return this._dateBeginning;
  }

  set dateBeginning(date: string) {
    this._dateBeginning = date;
    if (this.dateBeginning && this.timeBeginning) {
      this.eventToCreate.dateBeginning = new Date(this.dateBeginning + ' ' + this.timeBeginning);
      console.log('timeDate: ' + this.dateBeginning + ' ' + this._timeBeginning + ' ' + this.eventToCreate.dateBeginning);
      console.log('evento:');
      console.log(this.eventToCreate);
    }
    console.log('date beginning: ' + this.dateBeginning);
  }

  get dateEnd(): string {
    return this._dateEnd;
  }

  set dateEnd(date: string) {
    this._dateEnd = date;
    if (this.dateEnd && this.timeEnd) {
      this.eventToCreate.dateEnd = new Date(this.dateEnd + ' ' + this.timeEnd);
      console.log('timeDate: ' + this.dateEnd + ' ' + this.timeEnd + ' ' + this.eventToCreate.dateEnd);
      console.log('evento:');
      console.log(this.eventToCreate);
    }
    console.log('date end: ' + this.dateEnd);
  }

  get timeBeginning(): string {
    return this._timeBeginning;
  }

  set timeBeginning(time: string) {
    this._timeBeginning = time;
    if (this.dateBeginning && this.timeBeginning) {
      this.eventToCreate.dateBeginning = new Date(this.dateBeginning + ' ' + this.timeBeginning);
      console.log('timeDate: ' + this.dateBeginning + ' ' + this._timeBeginning + ' ' + this.eventToCreate.dateBeginning);
      console.log('evento:');
      console.log(this.eventToCreate);
    }
    console.log('time beginning: ' + this.timeBeginning);
  }

  get timeEnd(): string {
    return this._timeEnd;
  }

  set timeEnd(time: string) {
    this._timeEnd = time;
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
      this.eventCreated.emit(this.eventToCreate);
    });
  }

  showEspecifications(option: boolean) {
    option ? (this.showGastos = !this.showGastos) : (this.showInvitados = !this.showInvitados);
  }
}
