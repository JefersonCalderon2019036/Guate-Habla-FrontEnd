import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviciosglobales } from './rutaglobal.services';

@Injectable({
    providedIn: 'root'
  })
  export class chatsservices {
    public url: string;
    public token: any ;
    public identidad: any;
    public encabezadosintoken = new HttpHeaders().set('Content-Type','application/json');
    public encabezadocontoken = this.encabezadosintoken.set('Authorization', this.getToken());


    constructor(public _http: HttpClient) {
        this.url = serviciosglobales.url;
    }

    //funcion para ver el chatsservices
    getVerTodosLosChats(): Observable<any>{
        return this._http.get(this.url + "verChat/"+this.getIdChat(), {headers: this.encabezadocontoken})
    }

    postAgregarMessaje(chat: any): Observable<any>{
      let params = JSON.stringify(chat);
      return this._http.post(this.url + "sendMessage/"+this.getIdChat(), params, {headers: this.encabezadocontoken})
    }

    EliminarChat(): Observable<any>{
      return this._http.delete(this.url + "endChat/"+this.getIdChatActivo(), {headers: this.encabezadocontoken})
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

    //funcion para obtener el id del usuario
    getIdChat(){
        var identidad2 = localStorage.getItem('iddelusuario');
        if(identidad2 != 'undefined'){
          this.identidad = identidad2
        }else{
          this.identidad = null;
        }
        return this.identidad;
    }

    getIdChatActivo(){
      var identidad2 = localStorage.getItem('idchat');
        if(identidad2 != 'undefined'){
          this.identidad = identidad2
        }else{
          this.identidad = null;
        }
        return this.identidad;
    }

  }