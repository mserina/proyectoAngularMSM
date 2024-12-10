import { Component, OnInit } from '@angular/core';
import { LibrosServiciosService } from '../servicios/libros-servicios.service';
import { CommonModule } from '@angular/common';  // Importamos CommonModule para usar ngIf

@Component({
  selector: 'app-detalle-libros',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de importar CommonModule aquí
  templateUrl: './detalle-libros.component.html',
  styleUrl: './detalle-libros.component.css'
})
export class DetalleLibrosComponent implements OnInit {

  libro: any;  // Almacenar el libro seleccionado

  constructor(private servicioLibro: LibrosServiciosService) {}  // Inyección del servicio

  ngOnInit(): void {
    // Nos suscribimos al servicio para obtener el libro seleccionado
    this.servicioLibro.libroSeleccionado$.subscribe(libro => {
      this.libro = libro;  // Asignamos el libro a la propiedad 'libro'
    });
  }
}
