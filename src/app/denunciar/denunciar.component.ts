import { Component, OnInit } from '@angular/core';
import { ScriptsService } from "./../scripts.service"
@Component({
  selector: 'app-denunciar',
  templateUrl: './denunciar.component.html',
  styleUrls: ['./denunciar.component.scss']
})
export class DenunciarComponent implements OnInit {

  constructor( private _CargaScripts:ScriptsService)
   {
     _CargaScripts.Carga(["denunciar/denunciar"]);
    }


  ngOnInit(): void {
  }

}
