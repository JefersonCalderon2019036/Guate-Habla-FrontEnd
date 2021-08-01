import { Component, OnInit } from '@angular/core';
import { denunciasservice } from '../servicios/denuncias.services';

@Component({
  selector: 'app-todaslasdenuncias',
  templateUrl: './todaslasdenuncias.component.html',
  styleUrls: ['./todaslasdenuncias.component.scss'],
  providers: [denunciasservice]
})
export class TodaslasdenunciasComponent implements OnInit {
  public vertodaslasdenuncias: any;
  public verdenunciasactivas: any;
  public denunciasactivas: any;
  public todaslasdenuncias: any;

  constructor(private _denunciasservice: denunciasservice ) { }

  ngOnInit(): void {
    this.vertodaslasdenuncias2();
    this.ObtenerDenunciasActivas();
    this.ObtenerTodasLasDenuncias();
  }

  vertodaslasdenuncias2(){
    this.vertodaslasdenuncias = true;
    this.verdenunciasactivas = false;
  }

  verdenunciasactivas2(){
    this.vertodaslasdenuncias = false;
    this.verdenunciasactivas = true;
  }

  ObtenerDenunciasActivas(){
    this._denunciasservice.getdenunciasactivas().subscribe(
      response => {
        console.log(response)
        this.denunciasactivas = response
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

  ObtenerTodasLasDenuncias(){
    this._denunciasservice.getTodasLasDenuncias().subscribe(
      response => {
        console.log(response)
        this.todaslasdenuncias = response
      }, (error) => {
        console.log(<any>error)
      }
    )
  }
}
