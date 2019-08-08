import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataSharingService } from './data-sharing.service';
import { User } from '../models/user';

export const URL = ''; //'http://206.189.202.242:3000';

export function pred(token: string) {
  /*
  Si token es vacío, tomo el valor del token guardado en session. De lo contrario, lo dejo igual */
  token = token == null || token.length === 0 ? localStorage.getItem('qwerty') : token;
  /*
  Si el token en session no existe, entonces le otorgo vacío */
  token = token ? token : '';

  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'x-access-token': token
  });
  return headers;
}


@Injectable({
  providedIn: 'root'
})
export class ConexionBDService {


  constructor(
    private http: HttpClient,
    private token: DataSharingService
  ) {
    pred(token.token);
  }



  login(correo: string, contrasena: string) {

    const url = '/api/auth/login/';
    const body: { correo: string, contrasena: string } = {
      correo: correo,
      contrasena: contrasena
    };

    return this.http.post(url, body, { headers: pred(this.token.token) });
  }

  getUser(): Observable<User> {

    const url = '/api/user/';

    return this.http.get<User>(url, { headers: pred(this.token.token) });
  }


}
