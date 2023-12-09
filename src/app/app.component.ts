import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Routes } from '@angular/router';
import { ProductosComponent } from '../Componentes/productos/productos.component';
import { AprendizajeComponent } from '../Componentes/aprendizaje/aprendizaje.component';
import { InicioComponent } from '../Componentes/inicio/inicio.component';
import { FrutasComponent } from '../Componentes/frutas/frutas.component';
import { VerdurasComponent } from '../Componentes/verduras/verduras.component';
import { InsecticidasComponent } from "../Componentes/insecticidas/insecticidas.component";
import { HerramientasComponent } from "../Componentes/herramientas/herramientas.component";
import { CarComponent } from "../Componentes/car/car.component";
import {  NgZone } from '@angular/core';
import { ForoComponent } from "../Componentes/foro/foro.component";
import { RegistroComponent } from "../Componentes/registro/registro.component";
import { ReactiveFormsModule } from '@angular/forms';
import { VideosComponent } from "../Componentes/videos/videos.component";

const routes: Routes = [
    {path: 'inicio', component:InicioComponent},
  {path: 'productos', component:ProductosComponent},
   {path: 'frutas', component:FrutasComponent},
   {path: 'aprendizaje', component:AprendizajeComponent}
];

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProductosComponent, AprendizajeComponent, InicioComponent, FrutasComponent, VerdurasComponent, InsecticidasComponent, HerramientasComponent, CarComponent, ForoComponent, RegistroComponent, ReactiveFormsModule, VideosComponent]
})
export class AppComponent {
  ViewCar: boolean = false;

  constructor(private ngZone: NgZone) {}

  onToggleCar() {
    this.ViewCar = !this.ViewCar;
    this.ngZone.run(() => {}); // Forzar la actualización de la vista
  }
}
