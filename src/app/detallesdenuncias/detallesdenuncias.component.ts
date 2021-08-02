import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { chatsservices } from '../servicios/chats.services';
import { denunciasservice } from '../servicios/denuncias.services';
import { UsersServices } from '../servicios/user.services';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';



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

  imprimir(){
    const doc = new jsPDF();
    doc.setTextColor(6,21,60);
    doc.text("GUATE HABLA",85,10);
    doc.line(20, 20, 180, 20);
    doc.setTextColor(100);
    doc.text("* Datos de la denuncia",20,30);
    doc.line(20, 40, 180, 40);
    if(this.datosdenuncia.img != ""){
      doc.addImage(this.datosdenuncia.img,'JPG', 60, 45, 80, 80);
    }else{
      doc.addImage("https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-no-image-vector-symbol-missing.jpg",'JPG', 60, 45, 80, 80);
    }
    doc.setTextColor(0);
    doc.text("Descripción: "+this.datosdenuncia.descripcion,20,130);
    doc.setTextColor(0);
    doc.text("Tipo de denuncia: "+this.datosdenuncia.tipoDenuncia,20,140);
    doc.setTextColor(0);
    doc.text("Tipo de estado de la denuncia: "+this.datosdenuncia.status,20,150);

    doc.line(20, 160, 180, 160);
    doc.setTextColor(100);
    doc.text("* Datos del denunciador",20,170);
    doc.line(20, 180, 180, 180);
    doc.setTextColor(0);
    doc.text("Código de registro: "+this.datosdenuncia.userId,20,200);

    doc.line(20, 210, 180, 210);
    doc.setTextColor(100);
    doc.text("* Datos del policia acargo",20,220);
    doc.line(20, 230, 180, 230);
    doc.setTextColor(0);
    doc.text("Código de registro: "+this.datosdenuncia.encargadoId,20,240);
    doc.setTextColor(0);
    doc.text("Nombre del policia: "+this.datosdenuncia.nameEncargado,20,250);
    doc.line(20, 260, 180, 260);

    doc.setTextColor(6,21,60);
    doc.text("GUATE HABLA",85,280);

    doc.save("Denuncia con el código de registro "+this.datosdenuncia._id+".pdf");
  }

  ObtenerUnaDenuncia(){
    this._denunciasservice.getSolounaDenuncia().subscribe(
      response => {
        console.log(response)
        this.datosdenuncia = response
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

  FinalizarDenuncia(){
    let arrayduncia = {status: "FINALIZADA"}
    this._denunciasservice.putEditarDenuncias(arrayduncia).subscribe(
      response => {
        console.log(response)
        this.EliminarChat();
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

  EliminarChat(){
    this._chatsservices.EliminarChat().subscribe(
      response => {
        console.log(response)
        localStorage.setItem("idchat", "")
        this.Editarperfil();
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

  Editarperfil(){
    let arrayuser = { estado: "DISPONIBLE"}

      this._usuarioService.editarperfil(arrayuser ).subscribe(
            (response) => {
           console.log(response)
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
}
