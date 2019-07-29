import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private tokenUrl = 'http://192.168.5.73:3000/api/auth/login';
  private signinUrl = 'http://192.168.5.73:3000/api/user';
  constructor(
    private http: HttpClient
  ) { }

  getToken(pEmail: string, pPassword: string): Observable<string> {
    const body = {
      correo: pEmail,
      contrasena: pPassword
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post<string>(this.tokenUrl, body, httpOptions);
  }

  getUser(token: string): Observable<User> {
    console.log('Getting user with token: ' + token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };

    return this.http.get<User>(this.signinUrl, httpOptions);
  }
}
