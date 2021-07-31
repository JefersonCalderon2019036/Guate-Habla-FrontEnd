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
    this.usuarioModel.rol = "ROL_POLI"
    this._usuarioService.EditarUsuarioid(this.usuarioModel).subscribe(
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
    this.usuarioModel.rol = "ROL_ADMIN"
    this._usuarioService.EditarUsuarioid(this.usuarioModel).subscribe(
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
    this.usuarioModel.rol = "ROL_USUARIO"
    this._usuarioService.EditarUsuarioid(this.usuarioModel).subscribe(
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
