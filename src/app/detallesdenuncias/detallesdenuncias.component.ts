import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chatsservices } from '../servicios/chats.services';
import { denunciasservice } from '../servicios/denuncias.services';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-detallesdenuncias',
  templateUrl: './detallesdenuncias.component.html',
  styleUrls: ['./detallesdenuncias.component.scss'],
  providers: [denunciasservice,UsersServices,chatsservices]
})
export class DetallesdenunciasComponent implements OnInit {

  public datosdenuncia: any;
  public verificacionderol: any;

  constructor(
    private _usuarioService: UsersServices,
    public _chatsservices: chatsservices,
    private _denunciasservice: denunciasservice,
    private _router: Router ) {
      this.verificacionderol = this._usuarioService.getId();
     }

  ngOnInit(): void {
    this.ObtenerUnaDenuncia();
  }

  ObtenerUnaDenuncia(){
    this._denunciasservice.getSolounaDenuncia().subscribe(
      response => {
        console.log(response)
        this.datosdenuncia = response
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  FinalizarDenuncia(){
    let arrayduncia = {status: "FINALIZADA"}
    this._denunciasservice.putEditarDenuncias(arrayduncia).subscribe(
      response => {
        console.log(response)
        this.EliminarChat();
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  EliminarChat(){
    this._chatsservices.EliminarChat().subscribe(
      response => {
        console.log(response)
        localStorage.setItem("idchat", "")
        this.Editarperfil();
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  Editarperfil(){
    let arrayuser = { estado: "DISPONIBLE"}

      this._usuarioService.editarperfil(arrayuser ).subscribe(
            (response) => {
           console.log(response)
      }, (error) => {
          console.log(<any>error)
      }
    )
  }
}
