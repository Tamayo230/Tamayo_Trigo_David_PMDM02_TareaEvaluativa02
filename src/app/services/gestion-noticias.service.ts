import { ObjetoGeneral } from './../interfaces/mis-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GestionNoticiasService {
  private noticias: ObjetoGeneral[] = [];
  
 // private personas: IPersona[] = [];
  //el el contructor se hara todo pues sera el sitio donde se inicialicen los datos una vez conseguidos
  constructor(private leerFichero: HttpClient) {
    // en el contructor es donde se realizan las acciones una vez el obserbable accede a los datos 
    this.getNoticiasFichero();
  
   }

   getNoticiasFichero() {
    let datosFichero: Observable<ObjetoGeneral[]>;

    datosFichero = this.leerFichero.get<ObjetoGeneral[]>("/assets/datos/articulos.json");

    datosFichero.subscribe(dato => {
      console.log(dato);
      //this.noticias.push(...datos)
      this.noticias = dato;
      //let objeto : object = this.noticias.a;
     // console.log(this.noticias.);
    
    });

  }
  getNoticias(){
      return this.noticias;
   }
}
