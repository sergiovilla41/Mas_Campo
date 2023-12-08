import { Component } from '@angular/core';
import { AprendizajeComponent } from '../aprendizaje/aprendizaje.component';
import { ProductosComponent } from "../productos/productos.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [AprendizajeComponent, ProductosComponent]
})
export class InicioComponent {

}
