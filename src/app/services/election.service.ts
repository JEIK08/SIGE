import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Election } from '../models/election';
import { DataSharingService } from './data-sharing.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  private urlGetElection = '/api/getElection';
  private urlGetElections = '/api/getElections';
  private urlGetElectionTypes = '/api/getElectionTypes';
  private urlPostElection = '/api/administrador/postElection';
  private urlSearchElections = '/api/getElectionTable';
  private urlDeleteElection = '/api/administrador/deleteElection';
  private urlEditElection = '/api/administrador/editElection';
  private urlGetElectionFromId = '/api/getElectionFromId';

  constructor(private http: HttpClient, public dataService: DataSharingService) { }

  getElection(pUser: User): Observable<Election> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<Election>(this.urlGetElection, body, httpOptions);
  }

  getElections(): Observable<Election[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    return this.http.get<Election[]>(this.urlGetElections, httpOptions);
  }

  getElectionsTypes(): Observable<string[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    return this.http.get<string[]>(this.urlGetElectionTypes, httpOptions);
  }

  postElection(pElection: Election): Observable<Election> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      election: pElection
    };
    console.log('POST REQUEST BEING EXECUTED');
    return this.http.post<Election>(this.urlPostElection, body, httpOptions);
  }

  searchElections(pSearchStatement: string): Observable<{
    id: number,
    'Elección': string,
    'Año': string,
    'País': string,
    'Región': string,
    'Departamento': string,
    'Municipio': string
  }[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      searchStatement: pSearchStatement
    };

    return this.http.get<{
      id: number,
      'Elección': string,
      'Año': string,
      'País': string,
      'Región': string,
      'Departamento': string,
      'Municipio': string
    }[]>(this.urlSearchElections, httpOptions);
  }

  editElection(pElection: Election): Observable<Election> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      election: pElection
    };
    console.log('POST REQUEST BEING EXECUTED');
    return this.http.post<Election>(this.urlEditElection, body, httpOptions);
  }

  deleteElection(pElection: Election): Observable<Election> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      election: pElection
    };
    console.log('POST REQUEST BEING EXECUTED');
    return this.http.post<Election>(this.urlDeleteElection, body, httpOptions);
  }

  getElectionFromId(pId: number): Observable<Election> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      id: pId
    };

    return this.http.post<Election>(this.urlGetElectionFromId, body, httpOptions);
  }
}
