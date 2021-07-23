import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviciosglobales } from './rutaglobal.services';

@Injectable({
    providedIn: 'root'
  })
  export class noticiasservices {
    public url: string;
    public token: any ;
    public identidad: any;
    public encabezadosintoken = new HttpHeaders().set('Content-Type','application/json');
    public encabezadocontoken = this.encabezadosintoken.set('Authorization', this.getToken());

    constructor(public _http: HttpClient) {
        this.url = serviciosglobales.url;
    }

    //funcion para ver todas las noticias sin importar el tipo de usario
    VerTodasLasNoticias(): Observable<any>{ 
        return this._http.get(this.url + "verTodasNoticias", {headers: this.encabezadocontoken})
    }

    //funcion para obtener el token desde el localStorage
    getToken(){
        var token2 = localStorage.getItem('token');
        if(token2 != 'undefined'){
          this.token = token2;
        }else{
          this.token = null;
        }
        return this.token;
      }
  }