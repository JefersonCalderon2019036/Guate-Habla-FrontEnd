import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarios } from '../modelos/user.modelos';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuarioModel: usuarios;
  public token: any;
  public identidad: any;
  public rol: any;

  constructor(
    private _usuarioService: UsersServices,
    private _router: Router
  ) {
    this.usuarioModel  = new usuarios("","","","","","","","",0,"","")
  }


  ngOnInit(): void {
  }

  login() {
    this._usuarioService.login(this.usuarioModel).subscribe(
      (response) => {
        this.token = response.token;
        this.identidad = response.user;
        localStorage.setItem('token', this.token);
        localStorage.setItem('Rol', this.identidad.rol);
        localStorage.setItem("nombre", this.identidad.name);
        localStorage.setItem("imagendemiperfil", this.identidad.img);
        localStorage.setItem("iddelusuario", this.identidad._id);
        this._router.navigate(['/menudenavegacion'])
        this._router.navigate(['/principal'])
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

}
