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

  public MiUsuario : any;
  public usuarioModel : usuarios;

  constructor(
    private _usuarioService: UsersServices,
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
        this.VerMiPerfil();
      }, (error) => {
        console.log(<any>error)
      }
    )
  }
}
