import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { CursoComponent } from '../curso-feature/curso/curso.component';
import { CursosContainerComponent } from '../curso-feature/cursos-container/cursos-container.component';

const ROUTES: Routes = [
  { path: "curso", component: CursosContainerComponent },
  { path: "curso/:id", component: CursosContainerComponent },
  { path: "**", redirectTo: "index", pathMatch: "full" }
]

@NgModule({
  imports: [
    CommonModule,
    CursoComponent,
    CursosContainerComponent,
    RouterModule.forRoot(ROUTES)  
  ],
  declarations: []
})
export class RoutModule { }
