import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catalogoDragonBallMsM';
  libroSeleccionadoGuardado: string = '';

  guardarLibroSeleccinado(libro: string) {
    this.libroSeleccionadoGuardado = libro;
  }
}
