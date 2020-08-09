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
import { PrincipalEstudianteComponent } from './components/estudiante/principal-estudiante/principal-estudiante.component';
import { GuardiaEstudianteService } from './services/guardias/guardia-estudiante.service';
import { TeoriaUnionComponent } from './components/estudiante/conjuntos1/teoria-nivel1/teoria-union/teoria-union.component';
import { UnionN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/union-n1/union-n1.component';
import { TeoriaInterseccionComponent } from './components/estudiante/conjuntos1/teoria-nivel1/teoria-interseccion/teoria-interseccion.component';
import { InterseccionN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/interseccion-n1/interseccion-n1.component';
import { TeoriaDiferenciaComponent } from './components/estudiante/conjuntos1/teoria-nivel1/teoria-diferencia/teoria-diferencia.component';
import { DiferenciaN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/diferencia-n1/diferencia-n1.component';
import { TeoriaDiferenciaSimetricaComponent } from './components/estudiante/conjuntos1/teoria-nivel1/teoria-diferencia-simetrica/teoria-diferencia-simetrica.component';
import { DiferenciaSimetricaN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/diferencia-simetrica-n1/diferencia-simetrica-n1.component';
import { InformacionTeoriaElementalComponent } from './components/estudiante/introduccion-conjuntos/informacion-teoria-elemental/informacion-teoria-elemental.component';
import { EvaluacionN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/evaluacion-n1/evaluacion-n1.component';
import { ComplementoN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/complemento-n1/complemento-n1.component';
import { UnionN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/union-n2/union-n2.component';
import { InterseccionN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/interseccion-n2/interseccion-n2.component';
import { DiferenciaN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/diferencia-n2/diferencia-n2.component';
import { ComplementoN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/complemento-n2/complemento-n2.component';
import { DiferenciaSimetricaN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/diferencia-simetrica-n2/diferencia-simetrica-n2.component';
import { EvaluacionN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/evaluacion-n2/evaluacion-n2.component';
import { TeoriaComplementoComponent } from './components/estudiante/conjuntos1/teoria-nivel1/teoria-complemento/teoria-complemento.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home-academico', component: PrincipalAcademicoComponent, canActivate: [GuardiaAcademicoService]},
  { path: 'home-academico/actualizar-inf-estudiante/:id', component: EditarEstudianteComponent, canActivate: [GuardiaAcademicoService]},
  { path: 'registrar-estudiante', component: RegistrarEstudianteComponent, canActivate: [GuardiaAcademicoService]},
  { path: 'registrar-academico', component: RegistrarAcademicoComponent },
  { path: 'academicos-registrados', component: PrincipalAdministrador2Component },
  { path: 'actualizar-informacion-academico/:id', component: EditarAcademicoComponent },
  { path: 'home-administrador', component: PrincipalAdministrador1Component },
  { path: 'home-estudiante', component: PrincipalEstudianteComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/teoria-elemental-conjuntos', component: InformacionTeoriaElementalComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/union', component: TeoriaUnionComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/practicar-union-1', component: UnionN1Component, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/practicar-union-2', component: UnionN2Component, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/interseccion', component: TeoriaInterseccionComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/practicar-interseccion-1', component: InterseccionN1Component, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/practicar-interseccion-2', component: InterseccionN2Component, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/diferencia', component: TeoriaDiferenciaComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/practicar-diferencia-1', component: DiferenciaN1Component, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/practicar-diferencia-2', component: DiferenciaN2Component, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/complemento', component: TeoriaComplementoComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/practicar-complemento-1', component: ComplementoN1Component, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/practicar-complemento-2', component: ComplementoN2Component, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/diferenica-simetrica', component: TeoriaDiferenciaSimetricaComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/practicar-diferencia-simetrica-1', component: DiferenciaSimetricaN1Component, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/practicar-diferencia-simetrica-2', component: DiferenciaSimetricaN2Component, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/evaluacion-1', component: EvaluacionN1Component, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/evaluacion-2', component: EvaluacionN2Component, canActivate: [GuardiaEstudianteService]},
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: '401', component: Error401Component },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }