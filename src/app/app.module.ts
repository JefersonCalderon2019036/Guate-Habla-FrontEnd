  
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
import { ContactanosComponent } from './contactanos/contactanos.component';
import { DetallesnoticiasComponent } from './detallesnoticias/detallesnoticias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DenunciarComponent } from './denunciar/denunciar.component';
import { ScriptsService } from './scripts.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenudenavegacionComponent,
    PrincipalComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    ContactanosComponent,
    DetallesnoticiasComponent,
    UsuariosComponent,
    DenunciarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }