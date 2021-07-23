import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { noticias } from '../modelos/noticias.modelos';
import { noticiasservices } from '../servicios/noticias.services';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-detallesnoticias',
  templateUrl: './detallesnoticias.component.html',
  styleUrls: ['./detallesnoticias.component.scss'],
  providers: [noticiasservices,UsersServices]
})
export class DetallesnoticiasComponent implements OnInit {

  public verificaciondelrol: any;
  public rol: any;
  public NoticiaModel: noticias;
  public solounanoticia: any;

  constructor(
    public _usuarioService: UsersServices,
    public _NoticiasServices: noticiasservices,
    private _router: Router
  ) { 
    this.rol = this._usuarioService.getRol();
    this.NoticiaModel = new noticias("","","","","", [{ userIdComentario: "", descripcionComentario: ""}])
  }

  ngOnInit(): void {
    this.VerSolaUnaNoticia()
  }

  VerSolaUnaNoticia(){
    this._NoticiasServices.VerSolaUnaNoticia().subscribe(
      (Response) => {
        this.solounanoticia = Response
      }, (error) => {
        console.log(<any>error)
      }
    )
  }
}
