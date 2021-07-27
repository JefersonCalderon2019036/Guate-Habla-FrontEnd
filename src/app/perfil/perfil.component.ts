import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [UsersServices]
})
export class PerfilComponent implements OnInit {

  public MiUsuario : any;

  constructor(
    private _usuarioService: UsersServices
  ) { }

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
}
