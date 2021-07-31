import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { noticias } from '../modelos/noticias.modelos';
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

    //funcion para optener una sola noticias
    VerSolaUnaNoticia(): Observable<any>{
      return this._http.get(this.url + "verNoticiaId/"+this.getsolounanoticia(), {headers: this.encabezadocontoken})
    }

    //funcion para agregar una nueva noticias
    AgregarUnaNoticia(nuevanoticia: noticias): Observable<any>{
      let params = JSON.stringify(nuevanoticia);
      return this._http.post(this.url + "agregarNoticia", params, {headers: this.encabezadocontoken})
    }

    //funcion para agregar un comentario
    AgregarComentario(nuevanoticia: any): Observable<any>{
      let params = JSON.stringify(nuevanoticia);
      return this._http.post(this.url + "agregarComentarioNoticia/"+ this.getMiUsuario() + "/" + this.getsolounanoticia(), params, {headers: this.encabezadocontoken})
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
    getsolounanoticia(){
      var token2 = localStorage.getItem('IdSoloUnaNoticia');
      if(token2 != 'undefined'){
        this.token = token2;
      }else{
        this.token = null;
      }
      return this.token;
    }

    //funcion para obtener el token desde el localStorage
    getMiUsuario(){
      var token2 = localStorage.getItem('iddelusuario');
      if(token2 != 'undefined'){
        this.token = token2;
      }else{
        this.token = null;
      }
      return this.token;
    }
  }