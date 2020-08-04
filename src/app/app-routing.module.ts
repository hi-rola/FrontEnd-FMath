import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalAcademicoComponent } from './components/academico/principal-academico/principal-academico.component';
import { GuardiaAcademicoService } from './services/guardias/guardia-academico.service';
import { EditarEstudianteComponent } from './components/academico/editar-estudiante/editar-estudiante.component';
import { RegistrarEstudianteComponent } from './components/academico/registrar-estudiante/registrar-estudiante.component';
import { RegistrarAcademicoComponent } from './components/administrador/registrar-academico/registrar-academico.component';
import { PrincipalAdministrador2Component } from './components/administrador/principal-administrador2/principal-administrador2.component';
import { EditarAcademicoComponent } from './components/administrador/editar-academico/editar-academico.component';
import { PrincipalAdministrador1Component } from './components/administrador/principal-administrador1/principal-administrador1.component';
import { AcercaDeComponent } from './components/encabezados/menu/acerca-de/acerca-de.component';
import { Error401Component } from './components/errores/error401/error401.component';
import { Error404Component } from './components/errores/error404/error404.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home-academico', component: PrincipalAcademicoComponent, canActivate: [GuardiaAcademicoService]},
  { path: 'home-academico/actualizar-inf-estudiante/:id', component: EditarEstudianteComponent, canActivate: [GuardiaAcademicoService]},
  { path: 'registrar-estudiante', component: RegistrarEstudianteComponent},
  { path: 'registrar-academico', component: RegistrarAcademicoComponent },
  { path: 'academicos-registrados', component: PrincipalAdministrador2Component },
  { path: 'actualizar-informacion-academico/:id', component: EditarAcademicoComponent },
  { path: 'home-administrador', component: PrincipalAdministrador1Component },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: '401', component: Error401Component },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
