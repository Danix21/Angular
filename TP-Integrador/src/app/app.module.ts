import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutModule } from './rout/rout.module'
import { CoreModule } from './core/core.module'
import { ShareModule } from './share/share.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CursoFeatureModule } from './curso-feature/curso-feature.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutModule,
    CursoFeatureModule,
    CoreModule,
    ShareModule,
    HttpClientModule,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }