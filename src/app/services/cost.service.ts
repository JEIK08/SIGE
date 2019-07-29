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
  private urlPostCostType = 'http://192.168.5.73:3000/api/administrador/postCostType';
  private urlGetCostTypes = 'http://192.168.5.73:3000/api/getCostTypes';
  private urlPostCost = 'http://192.168.5.73:3000/api/shared/postCost';
  private urlSearchCosts = 'http://192.168.5.73:3000/api/getCostTable';

  constructor(private http: HttpClient, public dataService: DataSharingService) { }

  postCostType(pCostType: CostType): Observable<CostType>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };
    
    let body = {
      costType: pCostType
    };

    return this.http.post<CostType>(this.urlPostCostType, body, httpOptions);
  }

  getCostTypes(): Observable<CostType[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    return this.http.get<CostType[]>(this.urlGetCostTypes, httpOptions);
  }

  postCost(pCost: Cost): Observable<Cost>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      cost: pCost
    }
    return this.http.post<Cost>(this.urlPostCost, body, httpOptions);
  }

  searchCosts(pUser: User = null): Observable<{type: string, amount: number, name: string}[]>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': this.dataService.token
      })
    };

    let body = {
      user: pUser
    }

    return this.http.post<{type: string, amount, number, name: string}[]>(this.urlSearchCosts, body, httpOptions);
  }
}
