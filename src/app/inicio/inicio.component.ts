import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../servicios/user.services';
import { ScriptsService } from "./../scripts.service"
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [UsersServices]
})
export class InicioComponent implements OnInit {
  public rol: any;

  constructor( public _usuarioService: UsersServices, private _CargaScripts:ScriptsService)
   {
     _CargaScripts.Carga(["inicio/inicio"]);
     this.rol = this._usuarioService.getRol();
    }

  ngOnInit(): void {
    if(this.rol = null){
      localStorage.setItem('token', "");
        localStorage.setItem('Rol', "");
        localStorage.setItem("nombre", "");
        localStorage.setItem("imagendemiperfil", "");
        localStorage.setItem("iddelusuario", "");
        localStorage.setItem("idchat", "")
    }
  }

}
