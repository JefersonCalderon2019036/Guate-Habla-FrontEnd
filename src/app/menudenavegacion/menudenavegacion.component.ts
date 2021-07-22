import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-menudenavegacion',
  templateUrl: './menudenavegacion.component.html',
  styleUrls: ['./menudenavegacion.component.scss'],
  providers: [UsersServices]
})
export class MenudenavegacionComponent implements OnInit {

  public rol: any;
  public verificaciondelrol: any
  public token: any;
  public verificaciondeltoken: any;
  public verificaciondeltoken2: any;

  constructor(
    public _usuarioService: UsersServices,
    private _router: Router) { 
    this.rol = this._usuarioService.getRol();
    this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
    this.VerificacionRol();
    this.VerificacionToken2();
    this.VerificacionToken();
  }

  VerificacionRol() {
    if("ROLE_ADMIN" == this.rol){
      this.verificaciondelrol = true;
    }else{
      this.verificaciondelrol = false;
    }
  }

  VerificacionToken() {
    if("" == this.token){
      this.verificaciondeltoken = true;
    }else{
      this.verificaciondeltoken = false;
    }
  }

  VerificacionToken2() {
    if("" != this.token){
      this.verificaciondeltoken2 = true;
    }else{
      this.verificaciondeltoken2 = false;
    }
  }

  cerrarsecion(){
    localStorage.setItem('token', "");
    localStorage.setItem('Rol', "");
    localStorage.setItem("nombre", "");
    localStorage.setItem("imagendemiperfil", "");
    localStorage.setItem("iddelusuario", "");
    this._router.navigate(['/inicio'])
    this.VerificacionRol();
    this.VerificacionToken2();
    this.VerificacionToken();
  }
}
