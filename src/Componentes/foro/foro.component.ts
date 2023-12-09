import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [],
  templateUrl: './foro.component.html',
  styleUrl: './foro.component.css'
})
export class ForoComponent implements OnInit {
  preguntaForm: FormGroup;
  preguntas: string[] = [];

  constructor(private fb: FormBuilder) {
    this.preguntaForm = this.fb.group({
      pregunta: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Puedes cargar preguntas desde un servicio o backend aquí
  }

  agregarPregunta() {
    const preguntaControl = this.preguntaForm.get('pregunta');

    if (preguntaControl && preguntaControl.valid) {
      const nuevaPregunta = preguntaControl.value;
      this.preguntas.push(nuevaPregunta);
      this.preguntaForm.reset();
    }
  }


}
