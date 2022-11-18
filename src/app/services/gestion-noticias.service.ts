import { INoticia,IPersona } from './../interfaces/mis-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GestionNoticiasService {
  private noticias: INoticia[] = [];
  private personas: IPersona[] = [];
  //el el contructor se hara todo pues sera el sitio donde se inicialicen los datos una vez conseguidos
  constructor(private leerFichero: HttpClient) {
    // en el contructor es donde se realizan las acciones una vez el obserbable accede a los datos 
    this.getPersonasFichero();
   }

   getPersonasFichero() {
    let datosFichero: Observable<IPersona[]>;

    datosFichero = this.leerFichero.get<IPersona[]>("/assets/datos/personas.json");

    datosFichero.subscribe(datos => {
      console.log(datos);
      this.personas = datos;
  
    });

  }
   getNoticias(){
      return this.personas;
   }
}
