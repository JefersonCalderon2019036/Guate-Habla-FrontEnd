import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarios } from '../modelos/user.modelos';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UsersServices]
})
export class RegisterComponent implements OnInit {

  public usuarioModel : usuarios;

  constructor(
    private _usuarioService: UsersServices,
    private _router: Router
  ) { 
    this.usuarioModel  = new usuarios("","","","","","","","",0,"","")
  }

  ngOnInit(): void {
  }

  registrar(){
    this.usuarioModel.rol = "ROL_USUARIO"
    this._usuarioService.registrar(this.usuarioModel).subscribe(
      (response) => {
        console.log(response)
        this._router.navigate(['/login'])
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

}
