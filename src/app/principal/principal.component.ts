import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { noticias } from '../modelos/noticias.modelos';
import { noticiasservices } from '../servicios/noticias.services';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  providers: [noticiasservices,UsersServices]
})
export class PrincipalComponent implements OnInit {

  public noticias: any;
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
    this.NoticiaModel = new noticias("","","","","", [{ userIdComentario: "",username: "", descripcionComentario: ""}])
  }

  ngOnInit(): void {
    this.recargar();
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
}
