import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chatsservices } from '../servicios/chats.services';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-menudenavegacion',
  templateUrl: './menudenavegacion.component.html',
  styleUrls: ['./menudenavegacion.component.scss'],
  providers: [UsersServices,chatsservices]
})
export class MenudenavegacionComponent implements OnInit {

  public rol: any;
  public verificaciondelrol: any;
  public verificaciondelrol2: any;
  public token: any;
  public verificaciondeltoken: any;
  public verificaciondeltoken2: any;
  public nombre: any;
  public imagendemiperfil: any;
  static cerrarsecion: any;
  public chat2: any;

  constructor(
    public _usuarioService: UsersServices,
    public _chatsservices: chatsservices,
    private _router: Router) { 
    this.chat2 = this._chatsservices.getIdChatActivo();
    this.rol = this._usuarioService.getRol();
    this.token = this._usuarioService.getToken();
    this.nombre = this._usuarioService.getnombre();
    this.imagendemiperfil = this._usuarioService.getimagenperfil();
  }

  ngOnInit(): void {
    this.VerificacionDelToken();
    this.VerificacionDelToken2();
    this.VerificacionDelRol();
    this.VerficacionDelRol2()
  }

  VerificacionDelToken(){
    if("" == this.rol){
      this.verificaciondeltoken = true;
    }else{
      this.verificaciondeltoken = false;
    }
  }

  VerificacionDelToken2(){
    if("" != this.rol){
      this.verificaciondeltoken2 = true;
    }else{
      this.verificaciondeltoken2 = false;
    }
  }

  VerificacionDelRol(){
    if("ROL_ADMIN" == this.rol){
      this.verificaciondelrol = true;
    }else{
      this.verificaciondelrol = false;
    }
  }

  VerficacionDelRol2(){
    if("ROL_ADMIN" != this.rol){
      if("ROL_POLI" == this.rol){
        this.verificaciondelrol2 = true;
      }else{
        this.verificaciondelrol2 = false;
      }
    }else{
      this.verificaciondelrol2 = true;
    }
  }

  cerrarsecion(){
    localStorage.setItem('token', "");
    localStorage.setItem('Rol', "");
    localStorage.setItem("nombre", "");
    localStorage.setItem("imagendemiperfil", "");
    localStorage.setItem("iddelusuario", "");
    localStorage.setItem("IdSoloUnaNoticia", "");
    this._router.navigate(['/inicio']);
    this.VerificacionDelToken();
    this.VerificacionDelToken2();
    this.VerificacionDelRol();
    this.VerficacionDelRol2();
  }
}
