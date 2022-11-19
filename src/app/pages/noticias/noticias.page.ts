import { INoticia } from './../../interfaces/mis-interfaces';
import { GestionNoticiasService } from './../../services/gestion-noticias.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {


private noticiasno : INoticia[] = [];
  constructor(public GestionNoticias: GestionNoticiasService) { 
    this.noticiasno = GestionNoticias.getNoticias();
    console.log(this.noticiasno)
   
  }




}
