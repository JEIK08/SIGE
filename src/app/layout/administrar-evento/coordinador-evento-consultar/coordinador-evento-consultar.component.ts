import { Component, OnInit } from '@angular/core';
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
  mSearchStatement: string;
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
    });
  }

  insertEvent(event: Event) {
    this.dataStored.push(event);
    this.searchStatement = this.searchStatement;
  }

}
