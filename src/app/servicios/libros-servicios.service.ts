// libros-servicios.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'  // Esto hace que el servicio esté disponible en toda la aplicación
})
export class LibrosServiciosService {

  private apiUrl = 'http://localhost:3000/libros';   //Se le pasa el link del JSON Serve

  constructor(private http: HttpClient) {}   //Se crea una instancia de la clase HttpClient

  private libroSeleccionadoSubject = new BehaviorSubject<any>(null);     // Creamos un BehaviorSubject para almacenar el libro seleccionado

  libroSeleccionado$ = this.libroSeleccionadoSubject.asObservable();

  /*
   Método para actualizar el libro seleccionado
  */ 
  seleccionarLibro(libroSeleccionado: any): void {
    console.log("Se emitio el libro seleccionado " + libroSeleccionado.titulo);
    this.libroSeleccionadoSubject.next(libroSeleccionado);  //Emitimos el libro completo
  }

 /*
  Método para obtener libros filtrados por saga
 */
  obtenerLibrosPorSaga(saga: string): Observable<any[]> {
    // Realizamos una solicitud HTTP para obtener todos los libros desde la API
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((libros) => 
        // Si la saga es 'Todos', devolvemos todos los libros sin filtrar
        saga === 'Todos' ? libros :
        // Si la saga no es 'Todos', filtramos los libros por la saga seleccionada
        libros.filter((libro) => libro.saga === saga) 
      )
    );
  }
}
