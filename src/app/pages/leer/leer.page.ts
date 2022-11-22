import { Article, Source } from './../../interfaces/mis-interfaces';
import { GestionNoticiasService } from './../../services/gestion-noticias.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.page.html',
  styleUrls: ['./leer.page.scss'],
})
export class LeerPage implements OnInit {

  constructor(public GestionNoticias : GestionNoticiasService,private alerta: AlertController) { }

  irWeb(articulo: Article){
    console.log(articulo.url);
    window.open(articulo.url);
  }
  borrar(articulo: string){
    this.presentarAlerta(articulo);
    
  }
  async presentarAlerta(articulo: string) {
    const alert = await this.alerta.create({
      backdropDismiss: true,                 // No permite hacer nada más hasta contestar a la alerta
      header: 'Modificar',
      message: 'Seguro que dese Eliminar ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: (data) => {
             console.log(data);
            this.GestionNoticias.borrarNoticia(articulo);
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
