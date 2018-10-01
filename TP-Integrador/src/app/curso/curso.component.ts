import { Component, OnInit, Input, HostBinding, Output } from '@angular/core';
import { Curso } from 'Entidades/curso';
import { Estados } from 'enums/Estados';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  estados = [Estados.Pendiente, Estados.Activo, Estados.Inactivo]

  selectedEstado = Estados.Pendiente;
  estadoStr = this.selectedEstado;

  constructor() { }

  ngOnInit() {
  }

  @Input() curso: Curso;
  @Output()

  @HostBinding('attr.class') cssClass = this.estadoStr;

  onChange(event): void {
    this.curso.Estado = event;
    this.cssClass = event;
  }
}