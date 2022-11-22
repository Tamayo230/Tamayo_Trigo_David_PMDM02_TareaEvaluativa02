import { Noticia, Article, Source } from './../../interfaces/mis-interfaces';
import { GestionNoticiasService } from './../../services/gestion-noticias.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {
  //creamos array para trabajar
  public articulos : Article[] = [];
  public clicado = false;
  public idArticulo : string = "";
  constructor(public GestionNoticias: GestionNoticiasService) { 
   
  }
  
  anadir(articulo: Article){
     this.GestionNoticias.llenarArrayLeer(articulo);
     this.clicado = !this.clicado;
    

  }
  borrar(nameArticulo : string){
   this.GestionNoticias.borrarNoticia(nameArticulo);
  }
  ngOnInit() {
  
  }
 
}
