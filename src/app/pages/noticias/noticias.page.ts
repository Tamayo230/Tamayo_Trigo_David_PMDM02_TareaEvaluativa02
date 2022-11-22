import { Noticia, Article, Source } from './../../interfaces/mis-interfaces';
import { GestionNoticiasService } from './../../services/gestion-noticias.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {
  
  constructor(public GestionNoticias: GestionNoticiasService) {}
  //evento btnAnadir 
  anadir(articulo: Article){
    //llamamos a la funcion llenarArrayLeer Pasandole el articulo al objeto de nuestro servicio
     this.GestionNoticias.llenarArrayLeer(articulo);  
  }
  //evento btnBorrar
  borrar(nameArticulo : string){
    //llamamos a la funcion borrarNoticia Pasandole el nombre del articulo al objeto de nuestro servicio
   this.GestionNoticias.borrarNoticia(nameArticulo);
  }

  ngOnInit() {
  
  }
 
}
