import {  Noticia, Article } from './../../interfaces/mis-interfaces';
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

  constructor(public GestionNoticias: GestionNoticiasService) { 
   
  }
  ngOnInit() {
  
  }
 
}
