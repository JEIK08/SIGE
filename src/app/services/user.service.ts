import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Location } from '../models/location';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Election } from '../models/election';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlPostUser = 'http://192.168.5.73:3000/api/administrador/postUser';
  urlPostCandidate = 'http://192.168.5.73:3000/api/administrador/postCandidate';
  urlSearchUser = 'http://192.168.5.73:3000/api/getUsersTable';
  urlSearchVoter = 'http://192.168.5.73:3000/api/digitador/getVoterTable';
  urlGetUserTypes = 'http://192.168.5.73:3000/api/getUserTypes';
  urlGetUsers = 'http://192.168.5.73:3000/api/getUsers';
  urlPostVoter = 'http://192.168.5.73:3000/api/digitador/postVoter';
  urlPostBudget = 'http://192.168.5.73:3000/api/shared/postBudget';
  urlSearchBudget = 'http://192.168.5.73:3000/api/searchBudget';
  urlGetVoters = 'http://192.168.5.73:3000/api/getVoters';
  urlGetCandidate = 'http://192.168.5.73:3000/api/getCandidate';
  urlSearchVotersFromLeader = 'http://192.168.5.73:3000/api/shared/getVotersFromLeader';

  constructor(private http: HttpClient, public dataService: DataSharingService) { }

  postUser(pUser: User, pManager: User = null): Observable<User>{
    
    let body = {
      user: pUser,
      manager: pManager
    };

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    return this.http.post<User>(this.urlPostUser, body, httpOptions);
  }

  postCandidato(pUser: User, pElection: Election): Observable<User>{

    let body = {
      user: pUser,
      election: pElection
    };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    return this.http.post<User>(this.urlPostCandidate, body, httpOptions);
  }

  searchUser(): Observable<{
    'Primer apellido': string,
    'Segundo apellido': string,
    'Cédula': string,
    'Primer nombre': string,
    'Segundo nombre': string,
    'Coordinador adscrito': string,
    'Candidato adscrito': string,
    'Rol': string,
    'Correo': string,
    'Fecha': string
  }[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    return this.http.get<{
      'Primer apellido': string,
      'Segundo apellido': string,
      'Cédula': string,
      'Primer nombre': string,
      'Segundo nombre': string,
      'Coordinador adscrito': string,
      'Candidato adscrito': string,
      'Rol': string,
      'Correo': string,
      'Fecha': string
    }[]>(this.urlSearchUser, httpOptions);
  }

  searchVoter(pUser: User): Observable<{name: string, lastname: string, cedula: string, address: string}[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      user: pUser
    }

    return this.http.post<{name: string, lastname: string, cedula: string, address: string}[]>(this.urlSearchVoter, body, httpOptions);
  }

  getUserTypes(): Observable<string[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    return this.http.get<string[]>(this.urlGetUserTypes, httpOptions);
  } 

  getUsers(type: string = '', manager: User = null): Observable<User[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      'type': type,
      'manager': manager
    }

    return this.http.post<User[]>(this.urlGetUsers, body, httpOptions);    
  }

  postVoter(pVoter: User, pLeader: User, pLocation: Location): Observable<User>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      voter: pVoter,
      leader: pLeader,
      location: pLocation
    };
    return this.http.post<User>(this.urlPostVoter, body, httpOptions);
  }

  postBudget(pUser: User, pBudget: number): Observable<User>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      user: pUser,
      budget: pBudget
    }

    return this.http.post<User>(this.urlPostBudget, body, httpOptions);
  }

  searchBudget(pSearchStatement: string = ''): Observable<{lastname: string, name: string, cedula: string, budget: number}[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      searchStatement: pSearchStatement
    }

    return this.http.post<{lastname: string, name: string, cedula: string, budget: number}[]>(this.urlSearchBudget, body, httpOptions);
  }

  getVoters(pUser: User): Observable<{voter: User, leader: User}[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      user: pUser
    };

    return this.http.post<{voter: User, leader: User}[]>(this.urlGetVoters, body, httpOptions);
  }

  getCandidate(pUser: User): Observable<User>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      user: pUser
    };

    return this.http.post<User>(this.urlGetCandidate, body, httpOptions);
  }

  searchVotersFromLeader(pLeader: User = null): Observable<User[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      user: pLeader
    };

    return this.http.post<User[]>(this.urlSearchVotersFromLeader, body, httpOptions);
  }

  getUsersWithLocation(type: string = '', manager: User = null): Observable<{user: User, location: Location}[]>{
    let manager_email = '';
    if (manager){
      manager_email = manager.email;
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      'type': type,
      'manager': manager_email
    }

    return this.http.post<{user: User, location: Location}[]>(this.urlGetUsers, body, httpOptions);    
  }
}
