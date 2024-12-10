import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';

export const routes: Routes = [

    {path: 'Home', component: HomeComponent},
    {path: 'ListaRecetas',component: ListaLibrosComponent},
];
