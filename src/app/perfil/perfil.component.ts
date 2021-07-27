import { Component, OnInit } from '@angular/core';
import { usuarios } from '../modelos/user.modelos';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [UsersServices]
})
export class PerfilComponent implements OnInit {

  public usuarioModel : usuarios;
  public MiUsuario : any;

  constructor(
    private _usuarioService: UsersServices
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

  EditarMiPerfil(){
    this._usuarioService.EditarMiPerfil(this.usuarioModel).subscribe(
      (response) => {
        console.log(response)
      }, (error) => {
        console.log(<any>error)
      }
    )
  }
}
