import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { Curso } from 'Entidades/curso';
import { Estados } from 'enums/Estados';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  estados = [Estados.Pendiente, Estados.Activo, Estados.Inactivo]

  selectedEstado = "";
  estadoStr = this.selectedEstado;

  constructor() { }

  ngOnInit() {
  }

  @Input() curso: Curso;
  
  @Output() estadoElegido: EventEmitter<Estados> = new EventEmitter();

  @HostBinding('attr.class') cssClass = this.estadoStr;

  onChange(event): void {
    this.cssClass = event;
    this.estadoElegido.emit(<Estados> event);
  }
}