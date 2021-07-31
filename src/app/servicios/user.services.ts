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
    public token: any ;
    public identidad: any;
    public encabezadosintoken = new HttpHeaders().set('Content-Type','application/json');
    public encabezadocontoken = this.encabezadosintoken.set('Authorization', this.getToken());

    constructor(public _http: HttpClient) {
        this.url = serviciosglobales.url;
    }

     //funcion para Iniciar sesión
     login(usuario: usuarios): Observable<any>{
        let params = JSON.stringify(usuario);
        return this._http.post(this.url + 'login', params, {headers: this.encabezadosintoken});
    }

    //funcion para registrar
    registrar(usuario: usuarios): Observable<any>{
        let params = JSON.stringify(usuario);
        return this._http.post(this.url + 'register', params, {headers: this.encabezadosintoken})
    }

    //funcion para ver mi perfil
    MiPerfil(): Observable<any>{
      return this._http.get(this.url + "getUserId/" + this.getId(), {headers: this.encabezadocontoken})
    }
    
    //funcion para ver solo un  el usuarios
    obtenerUsuarioId(): Observable<any>{
      return this._http.get(this.url + "getUserId/"+ this.getsolounusuarioid(), {headers: this.encabezadocontoken})
    }

    //funcion para ver todos los ususuarios
    vertodoslosusuariosadmin(): Observable<any>{
      return this._http.get(this.url + "getUserIdAdmin/" + this.getId(), {headers: this.encabezadocontoken})
    }

     //funcion para editar mi perfil
     editarperfil(usuario: any): Observable<any>{
      let params = JSON.stringify(usuario);
      return this._http.put(this.url + 'userUpdate/' + this.getId() , params, {headers: this.encabezadocontoken})
    }

    //funcion para editar perfil
    editarUsaurio(usuario: any):Observable<any>{
      let params = JSON.stringify(usuario);
      return this._http.put(this.url + 'updateUserAdmin/' + this.getsolounusuarioid(), params, {headers: this.encabezadocontoken})
    }

    //funcion para eliminar mi perfil
    eliminarmiperfil(): Observable<any>{
      return this._http.delete(this.url + "userDelete/" + this.getId(), {headers: this.encabezadocontoken})
    }

    //funcion para eliminar un usuario como administrador
    eliminarunsolousuarioadmin(){
      return this._http.delete(this.url + "deleteUserAdmin/" + this.getsolounusuarioid(), {headers: this.encabezadocontoken})
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

    //funcion para obtener el tol
    getRol(){
      var identidad2 = localStorage.getItem('Rol');
      if(identidad2 != 'undefined'){
        this.identidad = identidad2
      }else{
        this.identidad = null;
      }
      return this.identidad;
    }

    //funcion para obtener el nombre del usuario
    getnombre(){
      var identidad2 = localStorage.getItem('nombre');
      if(identidad2 != 'undefined'){
        this.identidad = identidad2
      }else{
        this.identidad = null;
      }
      return this.identidad;
    }

    //funcion para obtener la imagen del usuario
    getimagenperfil(){
      var identidad2 = localStorage.getItem('imagendemiperfil');
      if(identidad2 != 'undefined'){
        this.identidad = identidad2
      }else{
        this.identidad = null;
      }
      return this.identidad;
    }

    //funcion para obtener el id del usuario
    getId(){
      var identidad2 = localStorage.getItem('iddelusuario');
      if(identidad2 != 'undefined'){
        this.identidad = identidad2
      }else{
        this.identidad = null;
      }
      return this.identidad;
    }

    //funcion para obtener el id del usuario
    getsolounusuarioid(){
      var identidad2 = localStorage.getItem('IdDeSoloUnUsuario');
      if(identidad2 != 'undefined'){
        this.identidad = identidad2
      }else{
        this.identidad = null;
      }
      return this.identidad;
    }
  }