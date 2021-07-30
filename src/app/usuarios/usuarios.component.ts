import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsersServices]
})
export class UsuariosComponent implements OnInit {
  public usuarios: any;

  constructor(
    private _usuarioService: UsersServices
  ) { }

  ngOnInit(): void {
    this.VerTodosLosUsuariosAdmin();
  }

  VerTodosLosUsuariosAdmin(){
    this._usuarioService.vertodoslosusuariosadmin().subscribe(
      (response) => {
        this.usuarios = response;
        console.log(response)
      }, (error) => {
        console.log(<any>error)
      }
    )
  }
}
