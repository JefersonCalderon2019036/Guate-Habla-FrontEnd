import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarios } from '../modelos/user.modelos';
import { UsersServices } from '../servicios/user.services';
import { MenudenavegacionComponent } from '../menudenavegacion/menudenavegacion.component'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [UsersServices]
})
export class PerfilComponent implements OnInit {

  public MiUsuario : any;
  public usuarioModel : usuarios;

  constructor(
    private _usuarioService: UsersServices,
    private _router: Router
  ) { 
    this.usuarioModel  = new usuarios("","","","","","","","",0,"","")
  }

  ngOnInit(): void {
    this.VerMiPerfil();
  }

  VerMiPerfil(){
    this._usuarioService.MiPerfil().subscribe(
      (response) => {
        this.MiUsuario = response
      }, (error) => {
        console.log(<any>error)
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
      console.log("No hay datos a actualizar")
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
        this._router.navigate(['/inicio']);
      }, (error) => {
        console.log(<any>error)
      }
    )
  }
}

