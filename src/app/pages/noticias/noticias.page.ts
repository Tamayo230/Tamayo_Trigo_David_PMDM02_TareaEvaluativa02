import { ObjetoGeneral } from './../../interfaces/mis-interfaces';
import { GestionNoticiasService } from './../../services/gestion-noticias.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {
  //creamos array para trabajar
  private articulos : ObjetoGeneral[] = []

  constructor(public GestionNoticias: GestionNoticiasService) { 

   //console.log("NoticiasPage")
   // console.log(GestionNoticias.getNoticias)
  //  console.log(this.noticiasno)
   
  }
  ngOnInit() {
    //console.log(this.articulos)
   // this.cargarArticulos
  }
  cargarArticulos(){
 //  this.articulos = this.GestionNoticias.getNoticias() 
  }



}
