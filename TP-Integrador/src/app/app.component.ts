import { Component } from '@angular/core';
import { IAlumno } from 'Interfaces/ialumno';
import { IDocente } from 'Interfaces/idocente';
import { ICurso } from 'Interfaces/icurso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TP-Integrador';
  alumno = alumnoValue;
  docente = docenteValue;
  curso = cursoValue;
}

const alumnoValue : IAlumno = {
  Dni : 33913241,
  Nombre : "Daniel",
  Apellido : "Sarzi",
  FechaDeNacimiento : new Date(1988, 6, 21),
  Direccion : "Baker Street 221B",
  Email : "sarzidaniel@gmail.com",
  Telefono : "1134346459",
  Legajo : 11
}

const docenteValue : IDocente = {
  Dni : 33444555,
  Nombre : "Fernando",
  Apellido : "Arias",
  FechaDeNacimiento : new Date(1984, 0, 1),
  Direccion : "Calle Falsa 123",
  Email : "farias@gmail.com",
  Telefono : "1122334455",
  Legajo : 1,
  Cuil : "1"
}

const cursoValue : ICurso = {
  IdCurso : 1,
  Asignatura : "Angular"
}