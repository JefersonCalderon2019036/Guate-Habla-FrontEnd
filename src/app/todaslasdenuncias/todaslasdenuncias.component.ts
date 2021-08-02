import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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

  constructor(private _denunciasservice: denunciasservice,private _router: Router ) { }

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
        let textura = <any>error.error.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: textura
        })
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
        let textura = <any>error.error.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: textura
        })
      }
    )
  }

  VerSoloUnaDenuncia(id: any){
    localStorage.setItem("idDenuncias", id);
    this._router.navigate(['/detallesdenuncias']);
  }
}
