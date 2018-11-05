import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CursosContainerComponent } from '../curso-feature/cursos-container/cursos-container.component';
import { CursoComponent } from '../curso-feature/curso/curso.component'
import { HomeComponent } from '../core/home/home.component';

const ROUTES: Routes = [
  { path: 'cursos', component: CursosContainerComponent },
  { path: 'curso/:id', component: CursoComponent },
  { path: 'Home', component: HomeComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class RoutModule { }