import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Election } from '../models/election';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  private urlGetElections = 'http://192.168.5.73:3000/api/getElections';
  private urlGetElectionTypes = 'http://192.168.5.73:3000/api/getElectionTypes';
  private urlPostElection = 'http://192.168.5.73:3000/api/administrador/postElection';
  private urlSearchElections = 'http://192.168.5.73:3000/api/getElectionTable';

  constructor(private http: HttpClient, public dataService: DataSharingService) { }

  getElections(): Observable<Election[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    return this.http.get<Election[]>(this.urlGetElections, httpOptions);
  }

  getElectionsTypes(): Observable<string[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    return this.http.get<string[]>(this.urlGetElectionTypes, httpOptions);
  }

  postElection(pElection: Election): Observable<Election>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      election: pElection
    }
    console.log('POST REQUEST BEING EXECUTED');
    return this.http.post<Election>(this.urlPostElection, body, httpOptions);
  }

  searchElections(searchStatement: string): Observable<{
    'Elección': string,
    'Año': string,
    'País': string,
    'Región': string,
    'Departamento': string,
    'Municipio': string
  }[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      'searchStatement': searchStatement
    };

    return this.http.get<{
      'Elección': string,
      'Año': string,
      'País': string,
      'Región': string,
      'Departamento': string,
      'Municipio': string
    }[]>(this.urlSearchElections, httpOptions);
  }
}
