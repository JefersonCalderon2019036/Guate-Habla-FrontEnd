import { Component, OnInit } from '@angular/core';
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
  public denunciasmodelo: any;

  constructor( private _CargaScripts:ScriptsService,
    private _denunciasservice: denunciasservice)
   {
     _CargaScripts.Carga(["denunciar/denunciar"]);
     this.denunciasmodelo = new denuncias("","","","","","","")
    }


  ngOnInit(): void {
  }

  CrearUnaDenunciaAnonima(){
    this.denunciasmodelo.tipoDenuncia = "ANONIMO"
    
    this._denunciasservice.postnuevadenuncia(this.denunciasmodelo).subscribe(
      response =>{
        console.log(response)
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
      }, error => {
        console.log(<any>error)
      }
    )
  }

}
