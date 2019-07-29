import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Cost } from '../models/cost';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DataSharingService } from './data-sharing.service';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private urlPostEvent = 'http://192.168.5.73:3000/api/shared/postEvent';
  private urlGetEvents = 'http://192.168.5.73:3000/api/shared/getEvents';

  constructor(private http: HttpClient, public dataService: DataSharingService) { }

  postEvent(pEvent: Event, pGuests: User[], pCosts: Cost[], pResponsible: User): Observable<Event> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      event: pEvent,
      guests: pGuests,
      costs: pCosts,
      responsible: pResponsible
    };

    return this.http.post<Event>(this.urlPostEvent, body, httpOptions);
  }

  getEvents(pUser: User): Observable<Event[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<Event[]>(this.urlGetEvents, body, httpOptions);
  }
}
