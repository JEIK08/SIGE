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
  private urlPostEvent = '/api/shared/postEvent';
  private urlGetEvents = '/api/shared/getEvents';
  private urlDeleteEvent = '/api/shared/deleteEvent';
  private urlEditEvent = '/api/shared/editEvent';
  private urlGetEventFromId = '/api/getEventFromId';
  private urlGetCosts = '/api/getCostsFromEvent';
  private urlGetGuests = '/api/getGuests';

  constructor(private http: HttpClient, public dataService: DataSharingService) { }

  postEvent(pEvent: Event, pGuests: User[], pCosts: Cost[], pResponsible: User): Observable<Event> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
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
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<Event[]>(this.urlGetEvents, body, httpOptions);
  }

  editEvent(pEvent: Event, pGuests: User[], pCosts: Cost[], pResponsible: User): Observable<Event> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      event: pEvent,
      guests: pGuests,
      costs: pCosts,
      responsible: pResponsible
    };

    return this.http.post<Event>(this.urlEditEvent, body, httpOptions);
  }

  deleteEvent(pEvent: Event): Observable<Event> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      event: pEvent
    };

    return this.http.post<Event>(this.urlDeleteEvent, body, httpOptions);
  }

  getEventFromId(pId: number): Observable<Event> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      id: pId
    };

    return this.http.post<Event>(this.urlGetEventFromId, body, httpOptions);
  }

  getCosts(pEvent: Event): Observable<Cost[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      event: pEvent
    };

    return this.http.post<Cost[]>(this.urlGetCosts, body, httpOptions);
  }

  getGuests(pEvent: Event): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      event: pEvent
    };

    return this.http.post<User[]>(this.urlGetGuests, body, httpOptions);
  }
}
