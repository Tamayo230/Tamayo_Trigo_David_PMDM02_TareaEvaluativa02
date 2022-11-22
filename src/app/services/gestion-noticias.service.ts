import { Noticia, Article, Source } from './../interfaces/mis-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GestionNoticiasService {
  
  public articulos: Article[] = [];
  public articulosSeleccionados: Article[] = [];
  public noticia : Noticia = {} as Noticia ;

  //el el contructor se hara todo pues sera el sitio donde se inicialicen los datos una vez conseguidos
  constructor(private leerFichero: HttpClient) {
    // en el contructor es donde se realizan las acciones una vez el obserbable accede a los datos 
    this.getNoticiasFichero();
  
   }

   getNoticiasFichero() {
    let datosFichero: Observable<Noticia>;

    datosFichero = this.leerFichero.get<Noticia>("/assets/datos/articulos.json");

    datosFichero.subscribe(dato => {
      console.log(dato.articles);
     console.log("servicio");
      console.log(dato);
     // this.noticia = dato;
      this.articulos.push(...dato.articles);
      console.log("Articulos");
      console.log(this.articulos);
    });
  }
  //Funcion para llenar array con las noticias seleccionadas
  llenarArrayLeer(articulo:Article){
    let nuevoAticulo : Article = articulo;
    this.articulosSeleccionados.push(nuevoAticulo);
   // console.log(this.articulosSeleccionados[0]);
    console.log(this.articulosSeleccionados);

  }

  getNoticiasLeer(){
   
    return this.articulosSeleccionados;
  }

  getNoticias(){
      return this.articulos;
   }
}
