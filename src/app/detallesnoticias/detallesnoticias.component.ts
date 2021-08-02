import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  public arraycomentarioupdate = {descripcionComentario: ""}
  public arraydatosactualizar = {titulo: "", descripcion: "", img: ""}

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
        let textura = <any>error.error.mensaje
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: textura
        })
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
        let textura = <any>error.error.mensaje
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: textura
        })
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

  EliminarNoticia(){
    this._NoticiasServices.EliminarUnaNotcia().subscribe(
      response => {
        console.log(response)
        this._router.navigate(['/principal'])
      }, (error) => {
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

  EditarNoticia(){
    
    if(
      this.arraydatosactualizar.titulo == "",
      this.arraydatosactualizar.descripcion =="",
      this.arraydatosactualizar.img ==""){
      console.log('No hay datos para actualizar')
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No hay datos para actualizar'
        })
    }else{
      if(
        this.arraydatosactualizar.titulo == "",
        this.arraydatosactualizar.descripcion =="",
        this.arraydatosactualizar.img !=""){
          let arrayuser = { img: this.arraydatosactualizar.img }

          this._NoticiasServices.EditarUnaNoticia(arrayuser).subscribe(
            response => {
              console.log(response)
              this.VerSolaUnaNoticia();
              this.VerificacionDelRol();
            }, (error) => {
              console.log(<any>error)
              let textura = <any>error.error.mensaje
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: textura
              })
            }
          )
      }else{
        if(
          this.arraydatosactualizar.titulo == "",
          this.arraydatosactualizar.descripcion !="",
          this.arraydatosactualizar.img !=""){
            let arrayuser = { img: this.arraydatosactualizar.img,
                              descripcion: this.arraydatosactualizar.descripcion}
  
            this._NoticiasServices.EditarUnaNoticia(arrayuser).subscribe(
              response => {
                console.log(response)
                this.VerSolaUnaNoticia();
                 this.VerificacionDelRol();
              }, (error) => {
                console.log(<any>error)
                let textura = <any>error.error.mensaje
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: textura
                })
              }
            )
        }else{
          if(
            this.arraydatosactualizar.titulo == "",
            this.arraydatosactualizar.descripcion !="",
            this.arraydatosactualizar.img ==""){
              let arrayuser = { descripcion: this.arraydatosactualizar.descripcion}
    
              this._NoticiasServices.EditarUnaNoticia(arrayuser).subscribe(
                response => {
                  console.log(response)
                  this.VerSolaUnaNoticia();
                   this.VerificacionDelRol();
                }, (error) => {
                  console.log(<any>error)
                  let textura = <any>error.error.mensaje
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: textura
                  })
                }
              )
          }else{
            if(
              this.arraydatosactualizar.titulo != "",
              this.arraydatosactualizar.descripcion !="",
              this.arraydatosactualizar.img !=""){
                let arrayuser = { titulo: this.arraydatosactualizar.titulo,
                                  img: this.arraydatosactualizar.img,
                                  descripcion: this.arraydatosactualizar.descripcion}
      
                this._NoticiasServices.EditarUnaNoticia(arrayuser).subscribe(
                  response => {
                    console.log(response)
                    this.VerSolaUnaNoticia();
                     this.VerificacionDelRol();
                  }, (error) => {
                    console.log(<any>error)
                    let textura = <any>error.error.mensaje
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: textura
                    })
                  }
                )
            }else{
              if(
                this.arraydatosactualizar.titulo != "",
                this.arraydatosactualizar.descripcion !="",
                this.arraydatosactualizar.img ==""){
                  let arrayuser = { titulo: this.arraydatosactualizar.titulo,
                                    descripcion: this.arraydatosactualizar.descripcion}
        
                  this._NoticiasServices.EditarUnaNoticia(arrayuser).subscribe(
                    response => {
                      console.log(response)
                      this.VerSolaUnaNoticia();
                       this.VerificacionDelRol();
                    }, (error) => {
                      console.log(<any>error)
                      let textura = <any>error.error.mensaje
                      Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: textura
                      })
                    }
                  )
              }else{
                let arrayuser = { titulo: this.arraydatosactualizar.titulo}
          
                    this._NoticiasServices.EditarUnaNoticia(arrayuser).subscribe(
                      response => {
                        console.log(response)
                        this.VerSolaUnaNoticia();
                         this.VerificacionDelRol();
                      }, (error) => {
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
            }
          }
        }
      }
    }
  }

  Obtenerunid(id: any){
    localStorage.setItem("comentariodi", id)
    var token2 = localStorage.getItem('comentariodi');
    console.log(token2)
  }

  EliminarComentario(){
    this._NoticiasServices.EliminarUnComentario().subscribe(
      response => {
        console.log(response)
        this.VerSolaUnaNoticia();
        this.VerificacionDelRol();
      }, error => {
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

  EditarComentario(){
    this._NoticiasServices.EditarComentario(this.arraycomentarioupdate).subscribe(
      response => {
        console.log(response)
        this.VerSolaUnaNoticia();
        this.VerificacionDelRol();
      }, (error) => {
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

}
