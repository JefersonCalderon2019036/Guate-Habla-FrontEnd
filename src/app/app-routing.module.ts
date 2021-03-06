import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent} from './perfil/perfil.component';
import { MenudenavegacionComponent } from './menudenavegacion/menudenavegacion.component';
import { ContactanosComponent} from './contactanos/contactanos.component';
import { DetallesnoticiasComponent } from './detallesnoticias/detallesnoticias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import{ DenunciarComponent} from './denunciar/denunciar.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { DetallesdenunciasComponent} from './detallesdenuncias/detallesdenuncias.component';
import { TodaslasdenunciasComponent } from './todaslasdenuncias/todaslasdenuncias.component';


const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "login", component: LoginComponent},
  {path: "registrar", component: RegisterComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "detallesnoticias", component: DetallesnoticiasComponent},
  {path: "menudenavegacion", component: MenudenavegacionComponent},
  {path: "contactanos", component: ContactanosComponent},
  {path:"usuarios", component:UsuariosComponent},
  {path:"denunciar", component:DenunciarComponent},
  {path: "piedepagina", component: PiedepaginaComponent},
  {path:"detallesdenuncias", component: DetallesdenunciasComponent},
  {path:"todaslasdenuncias", component: TodaslasdenunciasComponent},
  {path: "**", component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
