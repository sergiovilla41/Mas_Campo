import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registroForm: FormGroup;
  mostrarModal = false;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  registrarUsuario() {
    if (this.registroForm.valid) {
      // Lógica para enviar datos al servidor o realizar el registro
      console.log('Usuario registrado:', this.registroForm.value);
      // Puedes cerrar la ventana modal después del registro si es necesario
      this.mostrarModal = false;
    }
  }

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

}
