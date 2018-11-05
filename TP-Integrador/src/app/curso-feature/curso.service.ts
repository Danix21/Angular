import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICurso } from 'Interfaces/icurso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { 
    this.getCursos();
  }

  cursos: ICurso[];

  getCursos() {
    this.http.get<ICurso[]>('http://demo3744158.mockable.io/cursos').subscribe((data: ICurso[]) => this.cursos = { ...data });
  }

  getCurso(id: string): ICurso{
    console.log(id)
    let curso=this.cursos[0];
    return curso;
  }

  verCursos(): ICurso[]{
    console.log(this.cursos)
    return this.cursos;
  }
}
