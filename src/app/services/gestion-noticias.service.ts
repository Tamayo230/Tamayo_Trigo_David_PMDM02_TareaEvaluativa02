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
  public repetida : Boolean = false ;

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
    //ultilizamos la variale name porque es un campo que no esta vacio en ningun dato
    this.comprobarNoticia(articulo.source.name);
   // console.log(this.articulosSeleccionados[0]);
   // console.log(this.articulosSeleccionados);
  }
  //funcion que comprueva si la noticia esta en el array para no añadirla dos veces
  //devolvera un booleano
  comprobarNoticia(name : string ){
     console.log(name);
    // Busca la noticia con el name dado. Utiliza una función arrow como parámetro
    // let articuloSelec : Article = this.articulosSeleccionados.find((cadaArticulo) => cadaArticulo.source.name == name );
     
   // console.log(articuloSelec)

   
    return this.repetida;
  }
  borrarNoticia(name : string){
    let articuloSelec : any = this.articulosSeleccionados.find((cadaArticulo) => cadaArticulo.source.name == name );
    console.log(articuloSelec);
    if (articuloSelec) {
      // Busca el índice de la persona
      let indice: number = this.articulosSeleccionados.indexOf(articuloSelec);
      console.log(indice);

      if (indice != -1) {
        // Borra la persona con el índice obtenido
        this.articulosSeleccionados.splice(indice, 1);
       
        
        console.log(this.articulosSeleccionados);
      }
    }
  }
  getNoticiasLeer(){
   
    return this.articulosSeleccionados;
  }

  getNoticias(){
      return this.articulos;
   }
}
