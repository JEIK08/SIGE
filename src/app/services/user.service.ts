import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Location } from '../models/location';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Election } from '../models/election';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlPostUser = '/api/administrador/postUser';
  urlPostCandidate = '/api/administrador/postCandidate';
  urlSearchUser = '/api/getUsersTable';
  urlSearchVoter = '/api/digitador/getVoterTable';
  urlGetUserTypes = '/api/getUserTypes';
  urlGetUsers = '/api/getUsers';
  urlPostVoter = '/api/digitador/postVoter';
  urlPostBudget = '/api/shared/postBudget';
  urlSearchBudget = '/api/searchBudget';
  urlGetVoters = '/api/getVoters';
  urlGetCandidate = '/api/getCandidate';
  urlSearchVotersFromLeader = '/api/shared/getVotersFromLeader';
  urlDeleteUser = '/api/administrador/deleteUser';
  urlEditUser = '/api/administrador/editUser';
  urlDeleteVoter = '/api/digitador/deleteVoter';
  urlEditVoter = '/api/digitador/editVoter';
  urlPostTestigo = '/api/administrador/postTestigo';
  urlDeleteCandidate = '/api/administrador/deleteCandidate';
  urlEditCandidate = '/api/administrador/editCandidate';
  urlDeleteTestigo = '/api/administrador/deleteTestigo';
  urlEditTestigo = '/api/administrador/editTestigo';
  urlGetManager = '/api/getManager';
  urlGetUserFromId = '/api/getUserFromId';
  urlGetLeaderOfVoter = '/api/getLeaderOfVoter';
  urlGetVoterFromId = '/api/getVoterFromId';
  urlPostGoal = '/api/shared/postGoal';

  constructor(private http: HttpClient, public dataService: DataSharingService) { }

  postUser(pUser: User, pLocation: Location = null, pManager: User = null): Observable<User> {
    const body = {
      user: pUser,
      manager: pManager,
      location: pLocation
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    return this.http.post<User>(this.urlPostUser, body, httpOptions);
  }

  postTestigo(pUser: User, pTables: Location[], pManager: User): Observable<User> {
    const body = {
      user: pUser,
      manager: pManager,
      tables: pTables
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    return this.http.post<User>(this.urlPostTestigo, body, httpOptions);
  }

  postCandidato(pUser: User, pElection: Election): Observable<User> {

    const body = {
      user: pUser,
      election: pElection
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    return this.http.post<User>(this.urlPostCandidate, body, httpOptions);
  }

  searchUser(): Observable<{
    'id': string,
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
  }[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    return this.http.get<{
      'id': string,
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

  searchVoter(pUser: User): Observable<{
    id: string,
    name: string,
    lastname: string,
    cedula: string,
    address: string
  }[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<{
      id: string,
      name: string,
      lastname: string,
      cedula: string,
      address: string
    }[]>(this.urlSearchVoter, body, httpOptions);
  }

  getUserTypes(): Observable<string[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    return this.http.get<string[]>(this.urlGetUserTypes, httpOptions);
  }

  getUsers(pType: string = '', pManager: User = null): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      type: pType,
      manager: pManager
    };

    return this.http.post<User[]>(this.urlGetUsers, body, httpOptions);
  }

  postVoter(pVoter: User, pLeader: User, pLocation: Location): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      voter: pVoter,
      leader: pLeader,
      location: pLocation
    };
    return this.http.post<User>(this.urlPostVoter, body, httpOptions);
  }

  postBudget(pUser: User, pBudget: number): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser,
      budget: pBudget
    };

    return this.http.post<User>(this.urlPostBudget, body, httpOptions);
  }

  searchBudget(pSearchStatement: string = ''): Observable<{id: number, lastname: string, name: string, cedula: string, budget: number}[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      searchStatement: pSearchStatement
    };

    return this.http.post<{
      id: number,
      lastname: string,
      name: string,
      cedula: string,
      budget: number}[]>(this.urlSearchBudget, body, httpOptions);
  }

  getVoters(pUser: User): Observable<{voter: User, leader: User}[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<{voter: User, leader: User}[]>(this.urlGetVoters, body, httpOptions);
  }

  getCandidate(pUser: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<User>(this.urlGetCandidate, body, httpOptions);
  }

  searchVotersFromLeader(pLeader: User = null): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pLeader
    };

    return this.http.post<User[]>(this.urlSearchVotersFromLeader, body, httpOptions);
  }

  getUsersWithLocation(pType: string = '', pManager: User = null): Observable<{user: User, location: Location}[]> {
    let managerEmail = '';
    if (pManager) {
      managerEmail = pManager.email;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      type: pType,
      manager: managerEmail
    };

    return this.http.post<{user: User, location: Location}[]>(this.urlGetUsers, body, httpOptions);
  }

  deleteUser(pUser: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<User>(this.urlDeleteUser, body, httpOptions);
  }

  editUser(pUser: User, pLocation: Location = null, pManager: User = null): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser,
      manager: pManager,
      location: pLocation
    };

    return this.http.post<User>(this.urlEditUser, body, httpOptions);
  }

  editVoter(pUser: User, pLeader: User, pLocation: Location): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser,
      leader: pLeader,
      location: pLocation
    };

    return this.http.post<User>(this.urlEditVoter, body, httpOptions);
  }

  deleteVoter(pUser: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<User>(this.urlDeleteVoter, body, httpOptions);
  }

  editCandidate(pUser: User, pElection: Election): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser,
      election: pElection
    };

    return this.http.post<User>(this.urlEditCandidate, body, httpOptions);
  }

  deleteCandidate(pUser: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser,
    };

    return this.http.post<User>(this.urlDeleteCandidate, body, httpOptions);
  }

  editTestigo(pUser: User, pTables: Location[], pManager: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser,
      tables: pTables,
      manager: pManager
    };

    return this.http.post<User>(this.urlEditTestigo, body, httpOptions);
  }

  deleteTestigo(pUser: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<User>(this.urlDeleteTestigo, body, httpOptions);
  }

  getManager(pUser: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<User>(this.urlGetManager, body, httpOptions);
  }

  getUserFromId(pId: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      id: pId
    };

    return this.http.post<User>(this.urlGetUserFromId, body, httpOptions);
  }

  getLeaderOfVoter(voter: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: voter
    };

    return this.http.post<User>(this.urlGetLeaderOfVoter, body, httpOptions);
  }

  getVoterFromId(pId: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      id: pId
    };

    return this.http.post<User>(this.urlGetVoterFromId, body, httpOptions);
  }

  postGoal(pUser: User, pGoal: number): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser,
      goal: pGoal
    };

    return this.http.post<User>(this.urlPostGoal, body, httpOptions);
  }
}
