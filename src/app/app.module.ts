import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componetes/inicio/inicio.component';
import { MenudenavegacionComponent } from './componetes/menudenavegacion/menudenavegacion.component';
import { PrincipalComponent } from './componetes/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenudenavegacionComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
