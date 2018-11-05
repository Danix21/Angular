import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RoutModule } from '../rout/rout.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RoutModule
  ],
  declarations: [MenuComponent,  HomeComponent],
  exports: [MenuComponent]
})
export class CoreModule { }
