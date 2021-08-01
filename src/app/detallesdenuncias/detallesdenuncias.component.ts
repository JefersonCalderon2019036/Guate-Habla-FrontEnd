import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { denunciasservice } from '../servicios/denuncias.services';
import { UsersServices } from '../servicios/user.services';

@Component({
  selector: 'app-detallesdenuncias',
  templateUrl: './detallesdenuncias.component.html',
  styleUrls: ['./detallesdenuncias.component.scss'],
  providers: [denunciasservice,UsersServices]
})
export class DetallesdenunciasComponent implements OnInit {

  public datosdenuncia: any;
  public verificacionderol: any;

  constructor(
    private _usuarioService: UsersServices,
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
}
