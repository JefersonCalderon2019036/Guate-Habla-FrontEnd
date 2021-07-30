import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarios } from '../modelos/user.modelos';
import { UsersServices } from '../servicios/user.services';
import { MenudenavegacionComponent } from '../menudenavegacion/menudenavegacion.component'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [UsersServices]
})
export class PerfilComponent implements OnInit {

  public MiUsuario : any;
  public usuarioModel : usuarios;

  constructor(
    private _usuarioService: UsersServices,
    private _router: Router
  ) { 
    this.usuarioModel  = new usuarios("","","","","","","","",0,"","")
  }

  ngOnInit(): void {
    this.VerMiPerfil();
  }

  VerMiPerfil(){
    this._usuarioService.MiPerfil().subscribe(
      (response) => {
        this.MiUsuario = response
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  editarperfil(){
    this._usuarioService.editarperfil(this.usuarioModel).subscribe(
      (response) => {
        console.log(response)
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  eliminarmiperfil(){
    this._usuarioService.eliminarmiperfil().subscribe(
      (response) => {
        console.log(response)
        localStorage.setItem('token', "");
        localStorage.setItem('Rol', "");
        localStorage.setItem("nombre", "");
        localStorage.setItem("imagendemiperfil", "");
        localStorage.setItem("iddelusuario", "");
        localStorage.setItem("IdSoloUnaNoticia", "");
        this._router.navigate(['/inicio']);
      }, (error) => {
        console.log(<any>error)
      }
    )
  }
}

