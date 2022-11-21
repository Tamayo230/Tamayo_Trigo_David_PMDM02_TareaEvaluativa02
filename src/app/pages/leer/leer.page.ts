import { Article } from './../../interfaces/mis-interfaces';
import { GestionNoticiasService } from './../../services/gestion-noticias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.page.html',
  styleUrls: ['./leer.page.scss'],
})
export class LeerPage implements OnInit {

  public ArrayLeer : Article[] = [];

  constructor(public GestionNoticias : GestionNoticiasService) { }

  ngOnInit() {
  }

}
