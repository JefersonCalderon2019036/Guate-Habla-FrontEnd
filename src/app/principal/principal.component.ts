import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  public chat3: any;
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
    this.chat3 = this._chatsservices.getIdChatActivo();
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
        let textura = <any>error.error.mensaje
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: textura + ", actualiza la pagina para solucionar este problema"
        })
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
        let textura = <any>error.error.mensaje
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: textura
        })
      }
    )
  }

  recargar(){
    this.VerTodasLasNoticias();
    this.VerificacionDelRol();
    this.verficaciondechat();
  }

  verficaciondechat(){
    if(this.chat3 == ""){
      this.chat2 = false;
    }else{
      this.chat2 = true;
    }
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
        let textura = <any>error.error.message
        let textura2 = <any>error.error.mensaje
        if(textura != ""){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: textura + ", Si te sale el chat en negro solo necesitas cerrar seción y volver a entrar"
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "A ocurrido "+textura2
          })
        }
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
        let textura = <any>error.error.message
        let textura2 = <any>error.error.mensaje
        if(textura != ""){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: textura
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: textura2
          })
        }
      }
    )
  }
}
