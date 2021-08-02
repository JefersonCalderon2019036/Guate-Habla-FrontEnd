import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarios } from '../modelos/user.modelos';
import { UsersServices } from '../servicios/user.services';
import { MenudenavegacionComponent } from '../menudenavegacion/menudenavegacion.component'
import { denunciasservice } from '../servicios/denuncias.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [UsersServices, denunciasservice]
})
export class PerfilComponent implements OnInit {

  public MiUsuario : any;
  public usuarioModel : usuarios;
  public verificacionderol: any;
  public denunciasuser: any;
  public rol = "ROL_POLI";
  public denunciaspolicias: any;

  constructor(
    private _usuarioService: UsersServices,
    private _denunciasservice: denunciasservice,
    private _router: Router
  ) { 
    this.verificacionderol = this._usuarioService.getRol();
    this.usuarioModel  = new usuarios("","","","","","","","",0,"","")
  }

  ngOnInit(): void {
    this.VerMiPerfil();
    this.getDenunciasUser();
    this.getDenunciasPolicias();
  }

  VerMiPerfil(){
    this._usuarioService.MiPerfil().subscribe(
      (response) => {
        this.MiUsuario = response
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

  editarperfil(){
    if(  
      this.usuarioModel.name == "" &&
      this.usuarioModel.user == "" &&
      this.usuarioModel.email == "" &&
      this.usuarioModel.telefono == 0 &&
      this.usuarioModel.direccion == "" &&
      this.usuarioModel.img == ""
    ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "No hay datos a actualizar"
      })
    }else{
      if(
        this.usuarioModel.name == "" &&
        this.usuarioModel.user == "" &&
        this.usuarioModel.email == "" &&
        this.usuarioModel.telefono == 0 &&
        this.usuarioModel.direccion == "" &&
        this.usuarioModel.img != ""
        
      ){
        let arrayuser = { img: this.usuarioModel.img}

          this._usuarioService.editarperfil(arrayuser ).subscribe(
            (response) => {
              console.log(response)
              this.VerMiPerfil();
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
          this.usuarioModel.name == "" &&
          this.usuarioModel.user == "" &&
          this.usuarioModel.email == "" &&
          this.usuarioModel.telefono == 0 &&
          this.usuarioModel.direccion != "" &&
          this.usuarioModel.img != ""
        ){
          let arrayuser = {direccion: this.usuarioModel.direccion,
            img: this.usuarioModel.img }
          this._usuarioService.editarperfil(arrayuser ).subscribe(
            (response) => {
              console.log(response)
              this.VerMiPerfil();
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
          if(this.usuarioModel.name == "" &&
          this.usuarioModel.user == "" &&
          this.usuarioModel.email == "" &&
          this.usuarioModel.telefono == 0 &&
          this.usuarioModel.direccion != "" &&
          this.usuarioModel.img == ""){
               let arrayuser = { direccion: this.usuarioModel.direccion}

              this._usuarioService.editarperfil(arrayuser ).subscribe(
                (response) => {
                  console.log(response)
                  this.VerMiPerfil();
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
              this.usuarioModel.name == "" &&
              this.usuarioModel.user == "" &&
              this.usuarioModel.email == "" &&
              this.usuarioModel.telefono != 0 &&
              this.usuarioModel.direccion != "" &&
              this.usuarioModel.img != ""
            ){
              let arrayuser = {telefono: this.usuarioModel.telefono,
                direccion: this.usuarioModel.direccion,
                img: this.usuarioModel.img }

              this._usuarioService.editarperfil(arrayuser ).subscribe(
                (response) => {
                  console.log(response)
                  this.VerMiPerfil();
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
                this.usuarioModel.name == "" &&
                this.usuarioModel.user == "" &&
                this.usuarioModel.email == "" &&
                this.usuarioModel.telefono != 0 &&
                this.usuarioModel.direccion != "" &&
                this.usuarioModel.img == ""
              ){
                let arrayuser = {telefono: this.usuarioModel.telefono,
                  direccion: this.usuarioModel.direccion}

                this._usuarioService.editarperfil(arrayuser ).subscribe(
                  (response) => {
                    console.log(response)
                    this.VerMiPerfil();
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
                  this.usuarioModel.name == "" &&
                  this.usuarioModel.user == "" &&
                  this.usuarioModel.email == "" &&
                  this.usuarioModel.telefono != 0 &&
                  this.usuarioModel.direccion == "" &&
                  this.usuarioModel.img == ""
                  ){
                    let arrayuser = {telefono: this.usuarioModel.telefono}

                    this._usuarioService.editarperfil(arrayuser ).subscribe(
                      (response) => {
                        console.log(response)
                        this.VerMiPerfil();
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
                      this.usuarioModel.name == "" &&
                      this.usuarioModel.user == "" &&
                      this.usuarioModel.email != "" &&
                      this.usuarioModel.telefono != 0 &&
                      this.usuarioModel.direccion != "" &&
                      this.usuarioModel.img != ""
                      ){
                        let arrayuser = {email: this.usuarioModel.email,
                          telefono: this.usuarioModel.telefono,
                          direccion: this.usuarioModel.direccion,
                          img: this.usuarioModel.img }

                        this._usuarioService.editarperfil(arrayuser ).subscribe(
                          (response) => {
                            console.log(response)
                            this.VerMiPerfil();
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
                        if(this.usuarioModel.name == "" &&
                        this.usuarioModel.user == "" &&
                        this.usuarioModel.email != "" &&
                        this.usuarioModel.telefono != 0 &&
                        this.usuarioModel.direccion != "" &&
                        this.usuarioModel.img == ""){
                          let arrayuser = { email: this.usuarioModel.email,
                            telefono: this.usuarioModel.telefono,
                            direccion: this.usuarioModel.direccion
                            }

                          this._usuarioService.editarperfil(arrayuser ).subscribe(
                            (response) => {
                              console.log(response)
                              this.VerMiPerfil();
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
                          if(this.usuarioModel.name == "" &&
                        this.usuarioModel.user == "" &&
                        this.usuarioModel.email != "" &&
                        this.usuarioModel.telefono != 0 &&
                        this.usuarioModel.direccion == "" &&
                        this.usuarioModel.img == ""){
                          let arrayuser = { email: this.usuarioModel.email,
                            telefono: this.usuarioModel.telefono
                            }

                          this._usuarioService.editarperfil(arrayuser ).subscribe(
                            (response) => {
                              console.log(response)
                              this.VerMiPerfil();
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
                          if(this.usuarioModel.name == "" &&
                        this.usuarioModel.user == "" &&
                        this.usuarioModel.email != "" &&
                        this.usuarioModel.telefono != 0 &&
                        this.usuarioModel.direccion == "" &&
                        this.usuarioModel.img == ""){
                          let arrayuser = { email: this.usuarioModel.email,
                            telefono: this.usuarioModel.telefono
                            }

                          this._usuarioService.editarperfil(arrayuser ).subscribe(
                            (response) => {
                              console.log(response)
                              this.VerMiPerfil();
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
                          if(this.usuarioModel.name == "" &&
                        this.usuarioModel.user == "" &&
                        this.usuarioModel.email != "" &&
                        this.usuarioModel.telefono == 0 &&
                        this.usuarioModel.direccion == "" &&
                        this.usuarioModel.img == ""){
                          let arrayuser = { email: this.usuarioModel.email}

                          this._usuarioService.editarperfil(arrayuser ).subscribe(
                            (response) => {
                              console.log(response)
                              this.VerMiPerfil();
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
                          if(this.usuarioModel.name == "" &&
                          this.usuarioModel.user != "" &&
                          this.usuarioModel.email != "" &&
                          this.usuarioModel.telefono != 0 &&
                          this.usuarioModel.direccion != "" &&
                          this.usuarioModel.img != ""){
                            let arrayuser = { user: this.usuarioModel.user,
                              email: this.usuarioModel.email,
                              telefono: this.usuarioModel.telefono,
                              direccion: this.usuarioModel.direccion,
                              img: this.usuarioModel.img}

                            this._usuarioService.editarperfil(arrayuser ).subscribe(
                              (response) => {
                                console.log(response)
                                this.VerMiPerfil();
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
                            if(this.usuarioModel.name == "" &&
                          this.usuarioModel.user != "" &&
                          this.usuarioModel.email != "" &&
                          this.usuarioModel.telefono != 0 &&
                          this.usuarioModel.direccion != "" &&
                          this.usuarioModel.img == ""){
                            let arrayuser = { user: this.usuarioModel.user,
                              email: this.usuarioModel.email,
                              telefono: this.usuarioModel.telefono,
                              direccion: this.usuarioModel.direccion}

                            this._usuarioService.editarperfil(arrayuser ).subscribe(
                              (response) => {
                                console.log(response)
                                this.VerMiPerfil();
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
                            if(this.usuarioModel.name == "" &&
                          this.usuarioModel.user != "" &&
                          this.usuarioModel.email != "" &&
                          this.usuarioModel.telefono != 0 &&
                          this.usuarioModel.direccion == "" &&
                          this.usuarioModel.img == ""){
                            let arrayuser = { user: this.usuarioModel.user,
                              email: this.usuarioModel.email,
                              telefono: this.usuarioModel.telefono}

                            this._usuarioService.editarperfil(arrayuser ).subscribe(
                              (response) => {
                                console.log(response)
                                this.VerMiPerfil();
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
                            if(this.usuarioModel.name == "" &&
                          this.usuarioModel.user != "" &&
                          this.usuarioModel.email != "" &&
                          this.usuarioModel.telefono == 0 &&
                          this.usuarioModel.direccion == "" &&
                          this.usuarioModel.img == ""){
                            let arrayuser = { user: this.usuarioModel.user,
                              email: this.usuarioModel.email}

                            this._usuarioService.editarperfil(arrayuser ).subscribe(
                              (response) => {
                                console.log(response)
                                this.VerMiPerfil();
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
                            if(this.usuarioModel.name == "" &&
                          this.usuarioModel.user != "" &&
                          this.usuarioModel.email == "" &&
                          this.usuarioModel.telefono == 0 &&
                          this.usuarioModel.direccion == "" &&
                          this.usuarioModel.img == ""){
                            let arrayuser = { user: this.usuarioModel.user}

                            this._usuarioService.editarperfil(arrayuser ).subscribe(
                              (response) => {
                                console.log(response)
                                this.VerMiPerfil();
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
                            if(this.usuarioModel.name != "" &&
                              this.usuarioModel.user != "" &&
                              this.usuarioModel.email != "" &&
                              this.usuarioModel.telefono != 0 &&
                              this.usuarioModel.direccion != "" &&
                              this.usuarioModel.img != ""){
                                let arrayuser = { name: this.usuarioModel.name,
                                  user: this.usuarioModel.user,
                                  email: this.usuarioModel.email,
                                  telefono: this.usuarioModel.telefono,
                                  direccion: this.usuarioModel.direccion,
                                  img: this.usuarioModel.img}

                                this._usuarioService.editarperfil(arrayuser ).subscribe(
                                  (response) => {
                                    console.log(response)
                                    this.VerMiPerfil();
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
                                if(this.usuarioModel.name != "" &&
                              this.usuarioModel.user != "" &&
                              this.usuarioModel.email != "" &&
                              this.usuarioModel.telefono != 0 &&
                              this.usuarioModel.direccion != "" &&
                              this.usuarioModel.img == ""){
                                let arrayuser = { name: this.usuarioModel.name,
                                  user: this.usuarioModel.user,
                                  email: this.usuarioModel.email,
                                  telefono: this.usuarioModel.telefono,
                                  direccion: this.usuarioModel.direccion}

                                this._usuarioService.editarperfil(arrayuser ).subscribe(
                                  (response) => {
                                    console.log(response)
                                    this.VerMiPerfil();
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
                                if(this.usuarioModel.name != "" &&
                              this.usuarioModel.user != "" &&
                              this.usuarioModel.email != "" &&
                              this.usuarioModel.telefono != 0 &&
                              this.usuarioModel.direccion == "" &&
                              this.usuarioModel.img == ""){
                                let arrayuser = { name: this.usuarioModel.name,
                                  user: this.usuarioModel.user,
                                  email: this.usuarioModel.email,
                                  telefono: this.usuarioModel.telefono}

                                this._usuarioService.editarperfil(arrayuser ).subscribe(
                                  (response) => {
                                    console.log(response)
                                    this.VerMiPerfil();
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
                                if(this.usuarioModel.name != "" &&
                              this.usuarioModel.user != "" &&
                              this.usuarioModel.email != "" &&
                              this.usuarioModel.telefono == 0 &&
                              this.usuarioModel.direccion == "" &&
                              this.usuarioModel.img == ""){
                                let arrayuser = { name: this.usuarioModel.name,
                                  user: this.usuarioModel.user,
                                  email: this.usuarioModel.email}

                                this._usuarioService.editarperfil(arrayuser ).subscribe(
                                  (response) => {
                                    console.log(response)
                                    this.VerMiPerfil();
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
                                if(this.usuarioModel.name != "" &&
                              this.usuarioModel.user != "" &&
                              this.usuarioModel.email == "" &&
                              this.usuarioModel.telefono == 0 &&
                              this.usuarioModel.direccion == "" &&
                              this.usuarioModel.img == ""){
                                let arrayuser = { name: this.usuarioModel.name,
                                  user: this.usuarioModel.user}

                                this._usuarioService.editarperfil(arrayuser ).subscribe(
                                  (response) => {
                                    console.log(response)
                                    this.VerMiPerfil();
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
                                let arrayuser = { name: this.usuarioModel.name}

                                this._usuarioService.editarperfil(arrayuser ).subscribe(
                                  (response) => {
                                    console.log(response)
                                    this.VerMiPerfil();
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
                          }
                          }
                          }
                        }
                        }
                        }
                        }
                      }
                  }
              }
            }
          }
        }
      }
    }
  }

  eliminarmiperfil(){
    this._usuarioService.eliminarmiperfil().subscribe(
      (response) => {
        console.log(response)
        localStorage.setItem('token', "");
        localStorage.setItem('Rol', "");
        localStorage.setItem("nombre", "");
        localStorage.setItem("imagendemiperfil", "");
        localStorage.setItem("iddelusuario", "");
        localStorage.setItem("IdSoloUnaNoticia", "");
        localStorage.setItem("idDenuncias", "");
        localStorage.setItem("idchat", "")
        this._router.navigate(['/inicio']);
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

  getDenunciasUser(){
    this._denunciasservice.getDenunciasUser().subscribe(
      response => {
        console.log(response)
        this.denunciasuser = response
      }, error => {
        console.log(<any>error)
        let textura = <any>error.error.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: textura
        })
      }
    )
  }

  getDenunciasPolicias(){
    this._denunciasservice.getDenunciasPolicias().subscribe(
      response => {
        console.log(response)
        this.denunciaspolicias = response
      }, error => {
        console.log(<any>error)
        let textura = <any>error.error.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: textura
        })
      }
    )
  }

  VerSoloUnaDenuncia(id: any){
    localStorage.setItem("idDenuncias", id);
    this._router.navigate(['/detallesdenuncias']);
  }
}

