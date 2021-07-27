  
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenudenavegacionComponent } from './menudenavegacion/menudenavegacion.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetallesnoticiasComponent } from './detallesnoticias/detallesnoticias.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenudenavegacionComponent,
    PrincipalComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    DetallesnoticiasComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }