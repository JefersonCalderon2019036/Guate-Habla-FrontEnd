import { Component, OnInit } from '@angular/core';
import { usuarios } from '../modelos/user.modelos';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsersServices]
})
export class UsuariosComponent implements OnInit {
  public usuarios: any;
  public unsolousuario: any;
  public idusuarioadmin: any;
  public usuarioModel : usuarios;
  public arrayuser2 = {name: "",user: "", email: "", direccion: "",telefono: 0}

  constructor(
    private _usuarioService: UsersServices
  ) { 
    this.idusuarioadmin = this._usuarioService.getId();
    this.usuarioModel  = new usuarios("","","","","","","","",0,"","")
  }

  ngOnInit(): void {
    this.VerTodosLosUsuariosAdmin();
    this.obtenerUsuarioId(this.idusuarioadmin);
  }

  VerTodosLosUsuariosAdmin(){
    this._usuarioService.vertodoslosusuariosadmin().subscribe(
      response => {
        this.usuarios = response
      }, error  =>{
        console.log(<any>error)
      }
    )
  }

  obtenerUsuarioId(idUsuario: string){
    localStorage.setItem("IdDeSoloUnUsuario", idUsuario);
    this._usuarioService.obtenerUsuarioId().subscribe(
      response=>{
        this.unsolousuario = response
        this.VerTodosLosUsuariosAdmin();
      }, error => {
        console.log(<any>error)
      }
    )
  }

  eliminarusuario(){
    this._usuarioService.eliminarunsolousuarioadmin().subscribe(
      response => {
        console.log(response)
        this.VerTodosLosUsuariosAdmin();
        this.obtenerUsuarioId(this.idusuarioadmin);
      }, error => {
        console.log(<any>error)
      }
    )
  }

  editarperfildeusuarioconelrolpolicia(){
    let arrayuser = { rol: "ROL_POLI", estado: "DISPONIBLE"}
    this._usuarioService.editarUsaurio(arrayuser).subscribe(
      (response) => {
        console.log(response)
        this.VerTodosLosUsuariosAdmin();
        this.obtenerUsuarioId(this.idusuarioadmin);
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  editarperfilusuarioroladmin(){
    let arrayuser = { rol: "ROL_ADMIN", estado: "DISPONIBLE"}
    this._usuarioService.editarUsaurio(arrayuser).subscribe(
      (response) => {
        console.log(response)
        this.VerTodosLosUsuariosAdmin();
        this.obtenerUsuarioId(this.idusuarioadmin);
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  editarperfilusuariorolusuario(){
    let arrayuser = { rol: "ROL_USUARIOS", estado: "DISPONIBLE"}
    this._usuarioService.editarUsaurio(arrayuser).subscribe(
      (response) => {
        console.log(response)
        this.VerTodosLosUsuariosAdmin();
        this.obtenerUsuarioId(this.idusuarioadmin);
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  editarinformacionusuario(){
    if(
      this.arrayuser2.name == "",
      this.arrayuser2.user == "",
      this.arrayuser2.email == "",
      this.arrayuser2.telefono == 0,
      this.arrayuser2.direccion == ""
    ){
      console.log("No existen datos para actualizar")
    }else{

    
      if(
        this.arrayuser2.name == "",
        this.arrayuser2.user == "",
        this.arrayuser2.email == "",
        this.arrayuser2.telefono == 0,
        this.arrayuser2.direccion != ""
      ){
        let arrayuser = { direccion: this.arrayuser2.direccion }

          this._usuarioService.editarUsaurio(arrayuser ).subscribe(
            (response) => {
              console.log(response)
              this.VerTodosLosUsuariosAdmin();
              this.obtenerUsuarioId(this.idusuarioadmin);
            }, (error) => {
              console.log(<any>error)
            }
          )
      }else{
        if(
          this.arrayuser2.name == "",
          this.arrayuser2.user == "",
          this.arrayuser2.email == "",
          this.arrayuser2.telefono != 0,
          this.arrayuser2.direccion != ""
        ){
          let arrayuser = { direccion: this.arrayuser2.direccion, telefono: this.arrayuser2.telefono }

          this._usuarioService.editarUsaurio(arrayuser).subscribe(
            (response) => {
              console.log(response)
              this.VerTodosLosUsuariosAdmin();
              this.obtenerUsuarioId(this.idusuarioadmin);
            }, (error) => {
              console.log(<any>error)
            }
          )
        }else{
          if(
            this.arrayuser2.name == "",
            this.arrayuser2.user == "",
            this.arrayuser2.email == "",
            this.arrayuser2.telefono != 0,
            this.arrayuser2.direccion == ""
          ){
            let arrayuser = {telefono: this.arrayuser2.telefono }

          this._usuarioService.editarUsaurio(arrayuser).subscribe(
            (response) => {
              console.log(response)
              this.VerTodosLosUsuariosAdmin();
              this.obtenerUsuarioId(this.idusuarioadmin);
            }, (error) => {
              console.log(<any>error)
            }
          )
          }else{
            if(
              this.arrayuser2.name == "",
              this.arrayuser2.user == "",
              this.arrayuser2.email != "",
              this.arrayuser2.telefono != 0,
              this.arrayuser2.direccion != ""
            ){
              let arrayuser = { email: this.arrayuser2.email, direccion: this.arrayuser2.direccion, telefono: this.arrayuser2.telefono }

              this._usuarioService.editarUsaurio(arrayuser).subscribe(
                (response) => {
                  console.log(response)
                  this.VerTodosLosUsuariosAdmin();
                  this.obtenerUsuarioId(this.idusuarioadmin);
                }, (error) => {
                  console.log(<any>error)
                }
              )
            }else{
              if(
                this.arrayuser2.name == "",
                this.arrayuser2.user == "",
                this.arrayuser2.email != "",
                this.arrayuser2.telefono != 0,
                this.arrayuser2.direccion == ""
              ){
                let arrayuser = { email: this.arrayuser2.email, telefono: this.arrayuser2.telefono }

                this._usuarioService.editarUsaurio(arrayuser).subscribe(
                  (response) => {
                    console.log(response)
                    this.VerTodosLosUsuariosAdmin();
                    this.obtenerUsuarioId(this.idusuarioadmin);
                  }, (error) => {
                    console.log(<any>error)
                  }
                )
              }else{
                if(
                  this.arrayuser2.name == "",
                  this.arrayuser2.user == "",
                  this.arrayuser2.email != "",
                  this.arrayuser2.telefono == 0,
                  this.arrayuser2.direccion == ""
                ){
                  let arrayuser = { email: this.arrayuser2.email}

                this._usuarioService.editarUsaurio(arrayuser).subscribe(
                  (response) => {
                    console.log(response)
                    this.VerTodosLosUsuariosAdmin();
                    this.obtenerUsuarioId(this.idusuarioadmin);
                  }, (error) => {
                    console.log(<any>error)
                  }
                )
                }else{
                  if(
                    this.arrayuser2.name == "",
                    this.arrayuser2.user != "",
                    this.arrayuser2.email != "",
                    this.arrayuser2.telefono != 0,
                    this.arrayuser2.direccion != ""
                  ){
                    let arrayuser = { user: this.arrayuser2.user,
                                      email: this.arrayuser2.email,
                                      telefono: this.arrayuser2.telefono,
                                      direccion: this.arrayuser2.direccion}

                    this._usuarioService.editarUsaurio(arrayuser).subscribe(
                      (response) => {
                        console.log(response)
                        this.VerTodosLosUsuariosAdmin();
                        this.obtenerUsuarioId(this.idusuarioadmin);
                      }, (error) => {
                        console.log(<any>error)
                      }
                    )
                  }else{
                    if(
                      this.arrayuser2.name == "",
                      this.arrayuser2.user != "",
                      this.arrayuser2.email != "",
                      this.arrayuser2.telefono != 0,
                      this.arrayuser2.direccion == ""
                    ){
                      let arrayuser = { user: this.arrayuser2.user,
                        email: this.arrayuser2.email,
                        telefono: this.arrayuser2.telefono}

                      this._usuarioService.editarUsaurio(arrayuser).subscribe(
                        (response) => {
                          console.log(response)
                          this.VerTodosLosUsuariosAdmin();
                          this.obtenerUsuarioId(this.idusuarioadmin);
                        }, (error) => {
                          console.log(<any>error)
                        }
                      )
                    }else{
                      if(
                        this.arrayuser2.name == "",
                        this.arrayuser2.user != "",
                        this.arrayuser2.email != "",
                        this.arrayuser2.telefono == 0,
                        this.arrayuser2.direccion == ""
                      ){
                        let arrayuser = { user: this.arrayuser2.user,
                          email: this.arrayuser2.email}
  
                        this._usuarioService.editarUsaurio(arrayuser).subscribe(
                          (response) => {
                            console.log(response)
                            this.VerTodosLosUsuariosAdmin();
                            this.obtenerUsuarioId(this.idusuarioadmin);
                          }, (error) => {
                            console.log(<any>error)
                          }
                        )
                      }else{
                        if(
                          this.arrayuser2.name == "",
                          this.arrayuser2.user != "",
                          this.arrayuser2.email == "",
                          this.arrayuser2.telefono == 0,
                          this.arrayuser2.direccion == ""
                        ){
                          let arrayuser = { user: this.arrayuser2.user}
    
                          this._usuarioService.editarUsaurio(arrayuser).subscribe(
                            (response) => {
                              console.log(response)
                              this.VerTodosLosUsuariosAdmin();
                              this.obtenerUsuarioId(this.idusuarioadmin);
                            }, (error) => {
                              console.log(<any>error)
                            }
                          )
                        }else{
                          if(
                            this.arrayuser2.name != "",
                            this.arrayuser2.user != "",
                            this.arrayuser2.email != "",
                            this.arrayuser2.telefono != 0,
                            this.arrayuser2.direccion != ""
                          ){
                            let arrayuser = {
                              name: this.arrayuser2.name,
                              user: this.arrayuser2.user,
                              email: this.arrayuser2.email,
                              telefono: this.arrayuser2.telefono,
                              direccion: this.arrayuser2.direccion}
    
                            this._usuarioService.editarUsaurio(arrayuser).subscribe(
                              (response) => {
                                console.log(response)
                                this.VerTodosLosUsuariosAdmin();
                                this.obtenerUsuarioId(this.idusuarioadmin);
                              }, (error) => {
                                console.log(<any>error)
                              }
                            )
                          }else{
                            if(
                              this.arrayuser2.name != "",
                              this.arrayuser2.user != "",
                              this.arrayuser2.email != "",
                              this.arrayuser2.telefono != 0,
                              this.arrayuser2.direccion == ""
                            ){
                              let arrayuser = {
                                name: this.arrayuser2.name,
                                user: this.arrayuser2.user,
                                email: this.arrayuser2.email,
                                telefono: this.arrayuser2.telefono}
      
                              this._usuarioService.editarUsaurio(arrayuser).subscribe(
                                (response) => {
                                  console.log(response)
                                  this.VerTodosLosUsuariosAdmin();
                                  this.obtenerUsuarioId(this.idusuarioadmin);
                                }, (error) => {
                                  console.log(<any>error)
                                }
                              )
                            }else{
                              if(this.arrayuser2.name != "",
                              this.arrayuser2.user != "",
                              this.arrayuser2.email != "",
                              this.arrayuser2.telefono == 0,
                              this.arrayuser2.direccion == ""){
                                let arrayuser = {
                                  name: this.arrayuser2.name,
                                  user: this.arrayuser2.user,
                                  email: this.arrayuser2.email}
        
                                this._usuarioService.editarUsaurio(arrayuser).subscribe(
                                  (response) => {
                                    console.log(response)
                                    this.VerTodosLosUsuariosAdmin();
                                    this.obtenerUsuarioId(this.idusuarioadmin);
                                  }, (error) => {
                                    console.log(<any>error)
                                  }
                                )
                              }else{
                                if(this.arrayuser2.name != "",
                                this.arrayuser2.user != "",
                                this.arrayuser2.email == "",
                                this.arrayuser2.telefono == 0,
                                this.arrayuser2.direccion == ""){
                                  let arrayuser = {
                                    name: this.arrayuser2.name,
                                    user: this.arrayuser2.user}
          
                                  this._usuarioService.editarUsaurio(arrayuser).subscribe(
                                    (response) => {
                                      console.log(response)
                                      this.VerTodosLosUsuariosAdmin();
                                      this.obtenerUsuarioId(this.idusuarioadmin);
                                    }, (error) => {
                                      console.log(<any>error)
                                    }
                                  )
                                }else{
                                  let arrayuser = {
                                    name: this.arrayuser2.name}
          
                                  this._usuarioService.editarUsaurio(arrayuser).subscribe(
                                    (response) => {
                                      console.log(response)
                                      this.VerTodosLosUsuariosAdmin();
                                      this.obtenerUsuarioId(this.idusuarioadmin);
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