import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { AotCompiler } from '@angular/compiler';

@Component({
  selector: 'app-coordinador-evento-consultar',
  templateUrl: './coordinador-evento-consultar.component.html',
  styleUrls: ['./coordinador-evento-consultar.component.css']
})
export class CoordinadorEventoConsultarComponent implements OnInit {
  @Output() editEventEmitter: EventEmitter<Event> = new EventEmitter<Event>();

  mSearchStatement = '';
  data: Event[] = [];
  dataStored: Event[] = [];
  headerToData = {
    'Nombre evento': 'name',
    Descripción: 'description',
    'Fecha inicio': 'dateBeginning',
    Lugar: 'place'
  };

  get searchStatement(): string {
    return this.mSearchStatement;
  }

  set searchStatement(ss: string) {
    this.mSearchStatement = ss;

    this.data = this.dataStored.filter((event: Event) => {
      if (this.mSearchStatement === '') {
        return true;
      }

      return event.name.toLowerCase().indexOf(this.mSearchStatement.toLowerCase()) !== 1;
    });
  }

  constructor(private eventService: EventService, public dataService: DataSharingService) { }

  ngOnInit() {
    this.fetchEvents();
  }

  fetchEvents() {
    this.eventService.getEvents(this.dataService.serviceData).subscribe(data => {
      this.dataStored = data;
      this.data = this.dataStored.slice();
      this.searchStatement = this.searchStatement;
    });
  }

  insertEvent(event: Event) {
    console.log('Evento recibido');
    console.log(event);
    this.dataStored.push(event);
    this.searchStatement = this.searchStatement;
  }

  updateEvent(event: Event) {
    for (let i = 0; i < this.dataStored.length; i++) {
      if (this.dataStored[i].id === event.id) {
        this.dataStored[i] = event;
        break;
      }
    }

    this.searchStatement = this.searchStatement;
  }

  onEdit(event: Event) {
    const eventToEdit = new Event(event);
    this.editEventEmitter.emit(eventToEdit);
  }

  onDelete(event: Event) {
    const eventToDelete = new Event(event);
    this.eventService.deleteEvent(eventToDelete).subscribe((pEventDeleted: Event) => {
      console.log('Event deleted succesfully');
      const eventDeleted = new Event(pEventDeleted);
      for (let i = 0; i < this.dataStored.length; i++) {
        if (this.dataStored[i].id === eventDeleted.id) {
          this.dataStored.splice(i, 1);
          break;
        }
      }
      this.searchStatement = this.searchStatement;
    });
  }

}
