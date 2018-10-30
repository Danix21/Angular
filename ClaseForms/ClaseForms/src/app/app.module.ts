import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentComponent } from './reactive-component/reactive-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    ReactiveComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
