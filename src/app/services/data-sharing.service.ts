import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public serviceData: User;
  public token = '';

  constructor() { }
}
