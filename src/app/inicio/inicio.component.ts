import { Component, OnInit } from '@angular/core';
import { ScriptsService } from "./../scripts.service"
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor( private _CargaScripts:ScriptsService)
   {
     _CargaScripts.Carga(["inicio/inicio"]);
    }

  ngOnInit(): void {
  }

}
