import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioComponent } from '../Componentes/inicio/inicio.component';
import { ProductosComponent } from '../Componentes/productos/productos.component';
import { AprendizajeComponent } from '../Componentes/aprendizaje/aprendizaje.component';
import { FrutasComponent } from '../Componentes/frutas/frutas.component';
import { AppComponent } from './app.component';
import { VerdurasComponent } from '../Componentes/verduras/verduras.component';
import { InsecticidasComponent } from '../Componentes/insecticidas/insecticidas.component';
import { HerramientasComponent } from '../Componentes/herramientas/herramientas.component';
import { CarComponent } from '../Componentes/car/car.component';
import { ForoComponent } from '../Componentes/foro/foro.component';
import { RegistroComponent } from '../Componentes/registro/registro.component';
import { VideosComponent } from '../Componentes/videos/videos.component';
import { DocumentosComponent } from '../Componentes/documentos/documentos.component';
//rutas para navegar entre paginas
export const routes: Routes = [
  {path: '', redirectTo:'Home', pathMatch: 'full'},
  {path: 'app', component:AppComponent},
  {path: 'Home', component:InicioComponent},
  {path: 'productos', component:ProductosComponent},
   {path: 'Frutas', component:FrutasComponent},
   {path: 'Verduras', component:VerdurasComponent},
   {path: 'aprendizaje', component:AprendizajeComponent},
   {path: 'Herramientas', component:HerramientasComponent},
   {path:'Insecticidas', component:InsecticidasComponent},
   {path:'Car', component:CarComponent},
   {path:'Registro', component:RegistroComponent},
   {path:'Videos', component:VideosComponent},
   {path:'Foro', component:ForoComponent},
   {path:'Doc', component:DocumentosComponent}
];
