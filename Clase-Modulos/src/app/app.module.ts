import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'

import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';

import { Routes, RouterModule} from '@angular/router'
import { ItemsComponent } from './items/items/items.component'
import { ItemComponent } from './items/item/item.component'

import { HomeModule } from './home/home.module'
import { HomeComponent } from './home/home/home.component'

const ROUTES: Routes = [
  { path: "items", component: ItemsComponent },
  { path: "items/:id", component: ItemComponent },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ItemsModule,
    HomeModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ { 
    provide : LocationStrategy, 
    useClass: HashLocationStrategy 
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
