import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { denuncias } from '../modelos/denuncias.modelos';
import { denunciasservice } from '../servicios/denuncias.services';
import { ScriptsService } from "./../scripts.service"
@Component({
  selector: 'app-denunciar',
  templateUrl: './denunciar.component.html',
  styleUrls: ['./denunciar.component.scss'],
  providers: [denunciasservice,]
})
export class DenunciarComponent implements OnInit {
  public denunciasmodelo = {descripcion: "", tipoDenuncia: "", img: ""}

  constructor( private _CargaScripts:ScriptsService,
    private _denunciasservice: denunciasservice,
    private _router: Router)
   {
     _CargaScripts.Carga(["denunciar/denunciar"]);
    }


  ngOnInit(): void {
  }

  CrearUnaDenunciaAnonima(){
    this.denunciasmodelo.tipoDenuncia = "ANONIMO"
    
    this._denunciasservice.postnuevadenuncia(this.denunciasmodelo).subscribe(
      response =>{
        console.log(response)
        localStorage.setItem("idchat", response._id)
        this._router.navigate(['/principal'])
      }, error => {
        console.log(<any>error)
      }
    )
  }

  CrearUnaDenunciaPublica(){
    this.denunciasmodelo.tipoDenuncia = "PUBLICA"
    this._denunciasservice.postnuevadenuncia(this.denunciasmodelo).subscribe(
      response =>{
        console.log(response)
        localStorage.setItem("idchat", response._id)
        this._router.navigate(['/principal'])
      }, error => {
        console.log(<any>error)
      }
    )
  }

}
