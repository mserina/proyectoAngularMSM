// lista-libros.component.ts
import { Component } from '@angular/core';
import { LibrosServiciosService } from '../servicios/libros-servicios.service';
import { CommonModule } from '@angular/common';
import { DetalleLibrosComponent } from '../detalle-libros/detalle-libros.component';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [CommonModule, DetalleLibrosComponent],
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent {

  items: any[] = [];    // Array para almacenar los datos de los libros recibidos del servicio
  titulo: string = 'Todos';     // Título que muestra la lista, por defecto "Todos"
  mostrarLista: boolean = false;    // Variable de control que indica si la lista de libros debe ser mostrada o no

  constructor(private servicioLibro: LibrosServiciosService) {} // Inyectamos el servicio para interactuar con los datos

  /*
    Método para cargar los libros según la saga seleccionada
  */
  cargarDatos(saga: string): void {
    
    this.cambiarTitulo(saga);   // Cambiamos el título según la saga seleccionada 

    // Llamamos al servicio para obtener los datos según la saga seleccionada
    this.servicioLibro.obtenerLibrosPorSaga(saga).subscribe({
      next: (data) => {
        this.items = data;            // Cuando recibimos los datos, los asignamos al array 'items'
        this.mostrarLista = true;     // Habilitamos la visualización de la lista
      },
      error: (error) => {
        console.error('Error al obtener datos:', error);    // Si ocurre un error, lo mostramos en la consola
      },
      complete: () => {
        console.log('La llamada al servicio ha terminado');   // Se ejecuta cuando la llamada al servicio se completa
      }
    });
  }

  /*
    Método para actualizar el título según la saga seleccionada
  */
  cambiarTitulo(nuevoTitulo: string): void {
    this.titulo = nuevoTitulo; // Cambiamos el título dinámicamente
  }

  /*
    Método que se ejecuta cuando se hace clic en un libro de la lista
  */
  libroSeleccionado(libro: any): void {
    console.log("Se paso el libro al servicio"); // Imprimimos un mensaje para verificar la acción
    this.servicioLibro.seleccionarLibro(libro);  // Pasamos el libro completo al servicio para que sea manejado por el servicio
  }
}