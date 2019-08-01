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
  private urlLocations = '/api/getLocations';
  private urlLocationTypes = '/api/getLocationTypes';
  private urlPostLocation = '/api/administrador/postLocation';
  private urlSearchlocation = '/api/getLocationTable';
  private urlGetTablesFromWitness = '/api/getTablesFromWitness';
  private urlPostVotesToTable = '/api/testigo/postVotesToTable';
  private urlGetLocation = '/api/getLocation';
  private urlDeleteLocation = '/api/administrador/deleteLocation';
  private urlEditLocation = '/api/administrador/editLocation';
  private urlGetFather = '/api/getFather';
  private urlGetLocationFromId = '/api/getLocationFromId';
  private urlGetLocationOfVoter = '/api/getLocationOfVoter';

  constructor(private http: HttpClient, public dataService: DataSharingService) { }

  getLocationTypes(): Observable<string[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    return this.http.get<string[]>(this.urlLocationTypes, httpOptions);
  }

  getLocations(pType: string = 'any', pFather: Location = null): Observable<Location[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      father: pFather,
      type: pType
    };

    console.log(httpOptions);
    console.log(body);

    return this.http.post<Location[]>(this.urlLocations, body, httpOptions);
  }

  postLocation(pLocation: Location, pFather: Location = null) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      location: pLocation,
      father: pFather
    };

    return this.http.post(this.urlPostLocation, body, httpOptions);
  }

  searchLocation(): Observable<{id: number, 'Locación': string,
  'Tipo': string,
  'Región': string,
  'Departamento': string,
  'Municipio': string,
  'Localidad': string,
  'Puesto de votación': string
}[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    return this.http.get<{id: number, 'Locación': string,
    'Tipo': string,
    'Región': string,
    'Departamento': string,
    'Municipio': string,
    'Localidad': string,
    'Puesto de votación': string
    }[]>(this.urlSearchlocation, httpOptions);
  }

  getTablesFromWitness(witness: User): Observable<Location[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: witness
    };

    return this.http.post<Location[]>(this.urlGetTablesFromWitness, body, httpOptions);
  }

  postVotesToTable(pCandidate: User, pTable: Location, pVotes: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      candidate: pCandidate,
      table: pTable,
      votes: pVotes
    };

    return this.http.post<any>(this.urlPostVotesToTable, body, httpOptions);
  }

  getLocation(pUser: User): Observable<Location> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<Location>(this.urlGetLocation, body, httpOptions);
  }

  deleteLocation(pLocation: Location): Observable<Location> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      location: pLocation
    };

    return this.http.post<Location>(this.urlDeleteLocation, body, httpOptions);
  }

  editLocation(pLocation: Location, pFather: Location): Observable<Location> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      location: pLocation,
      father: pFather
    };

    return this.http.post<Location>(this.urlEditLocation, body, httpOptions);
  }

  getFather(pLocation: Location): Observable<Location> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      location: pLocation
    };

    return this.http.post<Location>(this.urlGetFather, body, httpOptions);
  }

  getLocationFromId(pId: number): Observable<Location> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      id: pId
    };

    return this.http.post<Location>(this.urlGetLocationFromId, body, httpOptions);
  }

  getLocationOfVoter(voter: User): Observable<Location> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: voter
    };

    return this.http.post<Location>(this.urlGetLocationOfVoter, body, httpOptions);
  }
}
