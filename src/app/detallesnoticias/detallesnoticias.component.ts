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
  public iduser: any;
  public nameuser: any;
  public NoticiaModel: noticias;
  public solounanoticia: any;
  public Comentarios: any;
  public modaleditar: any;
  public textcomentario: any;
  public arraymensajes = {userIdComentario: "",username: "", descripcionComentario: ""}

  constructor(
    public _usuarioService: UsersServices,
    public _NoticiasServices: noticiasservices,
    private _router: Router
  ) { 
    this.rol = this._usuarioService.getRol();
    this.iduser = this._usuarioService.getId();
    this.nameuser = this._usuarioService.getnombre();
    this.NoticiaModel = new noticias("","","","","", [{ userIdComentario: "",username: "", descripcionComentario: ""}])
  }

  ngOnInit(): void {
    this.VerSolaUnaNoticia();
    this.VerificacionDelRol();
  }

  VerSolaUnaNoticia(){
    this._NoticiasServices.VerSolaUnaNoticia().subscribe(
      (Response) => {
        this.solounanoticia = Response
        this.Comentarios = Response.comentarios
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  AgregarUnComentario(){
    this.arraymensajes.username = this.nameuser
    this._NoticiasServices.AgregarComentario(this.arraymensajes).subscribe(
      response =>{
        console.log(response)
        this.VerSolaUnaNoticia();
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  VerificacionDelRol(){
    if("ROL_ADMIN" == this.rol){
      this.verificaciondelrol = true;
    }else{
      this.verificaciondelrol = false;
    }
  }
}
