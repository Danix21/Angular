import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { Curso } from 'Entidades/curso';
import { Estados } from 'enums/Estados';
import { CursoService } from '../curso.service';
import { ActivatedRoute } from '@angular/router';
import { ICurso } from 'Interfaces/icurso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  estados = [Estados.Pendiente, Estados.Activo, Estados.Inactivo]

  selectedEstado = "";
  estadoStr = this.selectedEstado;

  id: string;
  curso: ICurso;

  constructor(private cursoService: CursoService, private route: ActivatedRoute) {
    this.estadoElegido = new EventEmitter();
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.curso = this.cursoService.verCursos().filter(c=> c.id == this.id)[0];
  }

  @Input() cursoEntidad: Curso;

  @Output() estadoElegido: EventEmitter<Estados> = new EventEmitter();

  @HostBinding('attr.class') cssClass = this.estadoStr;

  onChange(event): void {
    this.cssClass = event;
    this.estadoElegido.emit(<Estados>event);
  }
}