import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent} from './perfil/perfil.component';
import { MenudenavegacionComponent } from './menudenavegacion/menudenavegacion.component';
<<<<<<< Updated upstream
import { ContactanosComponent} from './contactanos/contactanos.component';
=======
import { DetallesnoticiasComponent } from './detallesnoticias/detallesnoticias.component';
>>>>>>> Stashed changes

const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "login", component: LoginComponent},
  {path: "registrar", component: RegisterComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "detallesnoticias", component: DetallesnoticiasComponent},
  {path: "menudenavegacion", component: MenudenavegacionComponent},
  {path: "contactanos", component: ContactanosComponent},
  {path: "**", component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
