import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DataSharingService } from './data-sharing.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private urlLocations = 'http://192.168.5.73:3000/api/getLocations';
  private urlLocationTypes = 'http://192.168.5.73:3000/api/getLocationTypes';
  private urlPostLocation = 'http://192.168.5.73:3000/api/administrador/postLocation';
  private urlSearchlocation = 'http://192.168.5.73:3000/api/getLocationTable';
  private urlGetTablesFromWitness = 'http://192.168.5.73:3000/api/testigo/getTablesFromWitness';
  private urlPostVotesToTable = 'http://192.168.5.73:3000/api/testigo/postVotesToTable';

  constructor(private http: HttpClient, public dataService: DataSharingService) { }

  getLocationTypes(): Observable<string[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    return this.http.get<string[]>(this.urlLocationTypes, httpOptions);
  }

  getLocations(type: string = 'any', father: Location = null): Observable<Location[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    let fatherId = -1;
    if (father){
      fatherId = father.id;
    }
    let body = {
      'father': fatherId,
      'type': type
    };

    console.log(httpOptions);
    console.log(body);

    return this.http.post<Location[]>(this.urlLocations, body, httpOptions);
  }

  postLocation(pLocation: Location, father: Location = null){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let fatherId = -1;
    if (father){
      fatherId = father.id;
    }
    let body = {
      'location': pLocation,
      'father': fatherId
    }

    return this.http.post(this.urlPostLocation, body, httpOptions);
  }

  searchLocation(): Observable<{'Locación': string,
  'Tipo': string,
  'Región': string,
  'Departamento': string,
  'Municipio': string,
  'Localidad': string,
  'Puesto de votación': string
}[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    return this.http.get<{'Locación': string,
    'Tipo': string,
    'Región': string,
    'Departamento': string,
    'Municipio': string,
    'Localidad': string,
    'Puesto de votación': string
    }[]>(this.urlSearchlocation, httpOptions);
  }

  getTablesFromWitness(witness: User): Observable<Location[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      user: witness
    };

    return this.http.post<Location[]>(this.urlGetTablesFromWitness, body, httpOptions);
  }

  postVotesToTable(pTable: Location, pVotes: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      table: pTable,
      votes: pVotes
    };

    return this.http.post<any>(this.urlPostVotesToTable, body, httpOptions);
  }
}
