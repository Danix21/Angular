import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { ICurso } from 'Interfaces/icurso';

@Component({
  selector: 'app-cursos-container',
  templateUrl: './cursos-container.component.html',
  styleUrls: ['./cursos-container.component.css']
})
export class CursosContainerComponent implements OnInit {

  constructor(private cursoService: CursoService) {
    
  }

  cursos: ICurso[];

  ngOnInit() {
    this.cursos = this.cursoService.verCursos();
  }
}
