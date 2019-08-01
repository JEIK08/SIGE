import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CostType } from '../models/cost-type';
import { DataSharingService } from './data-sharing.service';
import { Cost } from '../models/cost';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CostService {
  private urlPostCostType = '/api/administrador/postCostType';
  private urlGetCostTypes = '/api/getCostTypes';
  private urlPostCost = '/api/shared/postCost';
  private urlSearchCosts = '/api/getCostTable';
  private urlEditCost = '/api/shared/editCost';
  private urlDeleteCost = '/api/shared/deleteCost';
  private urlEditCostType = '/api/administrador/editCostType';
  private urlDeleteCostType = '/api/administrador/deleteCostType';
  private urlGetCostFromId = '/api/getCostFromId';
  private urlGetCostTypeFromId = '/api/getCostTypeFromId';
  private urlGetUser = '/api/getCostOwner';

  constructor(private http: HttpClient, public dataService: DataSharingService) { }

  postCostType(pCostType: CostType): Observable<CostType> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      costType: pCostType
    };

    return this.http.post<CostType>(this.urlPostCostType, body, httpOptions);
  }

  getCostTypes(): Observable<CostType[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    return this.http.get<CostType[]>(this.urlGetCostTypes, httpOptions);
  }

  postCost(pCost: Cost): Observable<Cost> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      cost: pCost
    };
    return this.http.post<Cost>(this.urlPostCost, body, httpOptions);
  }

  searchCosts(pUser: User = null): Observable<{id: number, type: string, amount: number, name: string}[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      user: pUser
    };

    return this.http.post<{id: number, type: string, amount, number, name: string}[]>(this.urlSearchCosts, body, httpOptions);
  }

  editCost(pCost: Cost): Observable<Cost> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      cost: pCost
    };
    return this.http.post<Cost>(this.urlEditCost, body, httpOptions);
  }

  deleteCost(pCost: Cost): Observable<Cost> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      cost: pCost
    };
    return this.http.post<Cost>(this.urlDeleteCost, body, httpOptions);
  }

  editCostType(pCostType: CostType): Observable<CostType> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      costType: pCostType
    };

    return this.http.post<CostType>(this.urlEditCostType, body, httpOptions);
  }

  deleteCostType(pCostType: CostType): Observable<CostType> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      costType: pCostType
    };

    return this.http.post<CostType>(this.urlDeleteCostType, body, httpOptions);
  }

  getCostFromId(pId: number): Observable<Cost> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      id: pId
    };

    return this.http.post<Cost>(this.urlGetCostFromId, body, httpOptions);
  }

  getCostTypeFromId(pId: number): Observable<CostType> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      id: pId
    };

    return this.http.post<CostType>(this.urlGetCostTypeFromId, body, httpOptions);
  }

  getOwner(pCost: Cost): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    const body = {
      cost: pCost
    };

    return this.http.post<User>(this.urlGetUser, body, httpOptions);
  }
}
