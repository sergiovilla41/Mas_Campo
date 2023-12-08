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
    imports: [CommonModule, RouterOutlet, ProductosComponent, AprendizajeComponent, InicioComponent, FrutasComponent, VerdurasComponent, InsecticidasComponent, HerramientasComponent]
})
export class AppComponent {
  title = 'mas_campo';
}
