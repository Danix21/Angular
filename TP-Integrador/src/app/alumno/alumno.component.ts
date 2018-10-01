import { Component, OnInit, Input } from '@angular/core';
import { Alumno } from 'Entidades/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() alumno : Alumno;

}