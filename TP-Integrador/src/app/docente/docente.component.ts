import { Component, OnInit, Input } from '@angular/core';
import { Docente } from 'Entidades/docente';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})

export class DocenteComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  @Input() docente : Docente;
}