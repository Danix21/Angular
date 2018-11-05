import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosContainerComponent } from './cursos-container/cursos-container.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ CursosContainerComponent, CursoComponent ]
})
export class CursoFeatureModule { }
