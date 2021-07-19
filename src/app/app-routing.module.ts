import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componetes/inicio/inicio.component';
import { PrincipalComponent } from './componetes/principal/principal.component';

const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "**", component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
