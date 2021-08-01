import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { denuncias } from '../modelos/denuncias.modelos';
import { serviciosglobales } from './rutaglobal.services';

@Injectable({
    providedIn: 'root'
  })
  export class denunciasservice {
    public url: string;
    public token: any ;
    public encabezadosintoken = new HttpHeaders().set('Content-Type','application/json');
    public encabezadocontoken = this.encabezadosintoken.set('Authorization', this.getToken());

    constructor(public _http: HttpClient) {
        this.url = serviciosglobales.url;
    }

    //funcion para generar una denuncias
    postnuevadenuncia(denuncia: denuncias): Observable<any>{
        let params = JSON.stringify(denuncia);
        return this._http.put(this.url + "addDenuncia/"+this.getIdUsuario(), params, {headers: this.encabezadocontoken})
    }

    //funcion para ver todas las denuncias activas
    getdenunciasactivas(): Observable<any>{
      return this._http.get(this.url + "listDenunciasActivas", {headers: this.encabezadocontoken})
    }

    //funcion para ver todas las denuncias
    getTodasLasDenuncias(): Observable<any>{
      return this._http.get(this.url + "listDenuncias", {headers: this.encabezadocontoken})
    }

    //funcion para ver las denuncias de un usuarios
    getDenunciasUser(): Observable<any>{
      return this._http.get(this.url + "listDenunciasUser/"+this.getIdUsuario(), {headers: this.encabezadocontoken})
    }

    //funcion para ver las denuncias de un usuarios
    getDenunciasPolicias(): Observable<any>{
      return this._http.get(this.url + "listDenunciasPoli/"+this.getIdUsuario(), {headers: this.encabezadocontoken})
    }

    //funcion para ver solo una denuncia
    getSolounaDenuncia(): Observable<any>{
      return this._http.get(this.url + "OneDenuncia/"+this.getDenncia(), {headers: this.encabezadocontoken})
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

      //funcion para obtener el token desde el localStorage
     getIdUsuario(){
        var token2 = localStorage.getItem('iddelusuario');
        if(token2 != 'undefined'){
          this.token = token2;
        }else{
          this.token = null;
        }
        return this.token;
      }

      //funcion para obtener el token desde el localStorage
     getDenncia(){
      var token2 = localStorage.getItem('idDenuncias');
      if(token2 != 'undefined'){
        this.token = token2;
      }else{
        this.token = null;
      }
      return this.token;
    }
  }