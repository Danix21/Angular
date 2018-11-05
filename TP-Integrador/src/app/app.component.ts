import { Component } from '@angular/core';
import { Curso } from 'Entidades/curso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TP-Integrador';

  curso: Curso;

  public cambiarEstado(event) {
    this.curso.estado = event;
  }
}