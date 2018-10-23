import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { CursoComponent } from './curso-feature/curso/curso.component';
import { CursosContainerComponent } from './curso-feature/cursos-container/cursos-container.component';
import { RoutModule } from './rout/rout.module'
import { CoreModule } from './core/core.module'
import { ShareModule } from './share/share.module';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    DocenteComponent,
    CursoComponent,
    CursosContainerComponent,
    RoutModule,
    CoreModule,
    ShareModule,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}