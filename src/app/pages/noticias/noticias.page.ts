import { INoticia } from './../../interfaces/mis-interfaces';
import { GestionNoticiasService } from './../../services/gestion-noticias.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {

  private noticias : INoticia[] = [];

  constructor(public GestionNoticias: GestionNoticiasService) { 

    this.noticias = GestionNoticias.getNoticias();
  //  console.log(GestionNoticias.getNoticias);
  }




}
