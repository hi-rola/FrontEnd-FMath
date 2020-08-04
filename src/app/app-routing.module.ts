import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalAcademicoComponent } from './components/academico/principal-academico/principal-academico.component';
import { GuardiaAcademicoService } from './services/guardias/guardia-academico.service';
import { EditarEstudianteComponent } from './components/academico/editar-estudiante/editar-estudiante.component';
import { RegistrarEstudianteComponent } from './components/academico/registrar-estudiante/registrar-estudiante.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home-academico', component: PrincipalAcademicoComponent, canActivate: [GuardiaAcademicoService]},
  { path: 'home-academico/actualizar-inf-estudiante/:id', component: EditarEstudianteComponent, canActivate: [GuardiaAcademicoService]},
  { path: 'registrar-estudiante', component: RegistrarEstudianteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
