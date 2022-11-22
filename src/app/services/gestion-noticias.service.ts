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
  
  constructor(private leerFichero: HttpClient) {
    //una vez el obserbable accede a los datos llenara el array de articulos seleccionados 
    this.getNoticiasFichero();
   }

   getNoticiasFichero() {
    let datosFichero: Observable<Noticia>;
    //leemos el archivo dandole la ruta de nuestro json
    datosFichero = this.leerFichero.get<Noticia>("/assets/datos/articulos.json");
    //cuando obtenga los datos los añadira a un array de la clase(interfad) Noticia 
    datosFichero.subscribe(dato => {
      //pasandole a el especificamente el array del objeto y no otro atributo
      this.articulos.push(...dato.articles);
    });
  }
  //Funcion para llenar array con las noticias seleccionadas
  llenarArrayLeer(articulo:Article){
    let nuevoAticulo : Article = articulo;
    this.articulosSeleccionados.push(nuevoAticulo); 
  }
 
  borrarNoticia(name : string){
    
    let articuloSelec : any = this.articulosSeleccionados.find((cadaArticulo) => cadaArticulo.source.name == name );
    console.log(articuloSelec);
    
    if (articuloSelec) {
      // Busca el índice de la noticia
      let indice: number = this.articulosSeleccionados.indexOf(articuloSelec);
      
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
