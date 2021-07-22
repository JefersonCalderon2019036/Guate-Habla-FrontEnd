import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuarios } from '../modelos/user.modelos';
import { serviciosglobales } from './rutaglobal.services';

@Injectable({
    providedIn: 'root'
  })
  export class UsersServices {
    public url: string;
    public encabezasintoken = new HttpHeaders().set('Content-Type','application/json');

    constructor(public _http: HttpClient) {
        this.url = serviciosglobales.url;
    }

     //funcion para Iniciar sesión
     login(usuario: usuarios): Observable<any>{
        let params = JSON.stringify(usuario);
        return this._http.post(this.url + 'login', params, {headers: this.encabezasintoken});
    }

    //funcion para registrar
    registrar(usuario: usuarios): Observable<any>{
        let params = JSON.stringify(usuario);
        return this._http.post(this.url + 'register', params, {headers: this.encabezasintoken});
    }

  }