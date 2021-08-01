import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { noticias } from '../modelos/noticias.modelos';
import { chatsservices } from '../servicios/chats.services';
import { noticiasservices } from '../servicios/noticias.services';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  providers: [noticiasservices,UsersServices,chatsservices]
})
export class PrincipalComponent implements OnInit {

  public noticias: any;
  public verificaciondelrol: any;
  public rol: any;
  public NoticiaModel: noticias;
  public solounanoticia: any;
  public chat: any;
  public nombrechat: any;
  public encargadorchat: any;
  public chat2: any;
  public chatbloqueo: any;
  public iduser: any;
  public nameuser: any;
  public messajearray = {mensaje: ""}

  constructor(
    public _usuarioService: UsersServices,
    public _NoticiasServices: noticiasservices,
    public _chatsservices: chatsservices,
    private _router: Router
  ) { 
    this.rol = this._usuarioService.getRol();
    this.iduser = this._usuarioService.getId();
    this.nameuser = this._usuarioService.getnombre();
    this.chat2 = this._chatsservices.getIdChatActivo();
    this.NoticiaModel = new noticias("","","","","", [{ userIdComentario: "",username: "", descripcionComentario: ""}])
  }

  ngOnInit(): void {
    this.recargar();
    this.verchat();
  }

  VerTodasLasNoticias(){
    this._NoticiasServices.VerTodasLasNoticias().subscribe(
      (Response) => {
        this.noticias = Response
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  detallesnoticias(id: any){
    localStorage.setItem("IdSoloUnaNoticia", id);
    this._router.navigate(['/detallesnoticias'])
  }

  AgregarUnaNoticia(){
    this._NoticiasServices.AgregarUnaNoticia(this.NoticiaModel).subscribe(
      (response) => {
        console.log(response)
        this.recargar();
      },(error) => {
        console.log(<any>error)
      }
    )
  }

  recargar(){
    this.VerTodasLasNoticias();
    this.VerificacionDelRol();
  }

  VerificacionDelRol(){
    if("ROL_ADMIN" == this.rol){
      this.verificaciondelrol = true;
    }else{
      this.verificaciondelrol = false;
    }
  }

  verchat(){
    this._chatsservices.getVerTodosLosChats().subscribe(
      response => {
        this.chat = response.Messages
        this.nombrechat = response.username
        this.encargadorchat = response.nameEncargado
        localStorage.setItem("idchat", response._id)
        console.log(this.chat)
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  AgregarMesaje(){
    this._chatsservices.postAgregarMessaje(this.messajearray).subscribe(
      response => {
        console.log(response)
        this.verchat()
      }, (error) => {
        console.log(<any>error)
      }
    )
  }
}
