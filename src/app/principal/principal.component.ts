import { Component, OnInit } from '@angular/core';
import { noticiasservices } from '../servicios/noticias.services';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  providers: [noticiasservices]
})
export class PrincipalComponent implements OnInit {

  public noticias: any;

  constructor(
    private _NoticiasServices: noticiasservices
  ) { }

  ngOnInit(): void {
    this.VerTodasLasNoticias();
  }

  VerTodasLasNoticias(){
    this._NoticiasServices.VerTodasLasNoticias().subscribe(
      Response => {
        this.noticias = Response
        console.log(this.noticias)
      }, error => {
        console.log(<any>error)
      }
    )
  }
}
