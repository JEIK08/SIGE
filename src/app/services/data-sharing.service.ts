import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  serviceData: User;
  token: string;

  constructor() { }
}
