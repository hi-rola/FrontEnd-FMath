import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialDesignModule } from './models/MaterialDesign.module';
import { InterceptorhttpService } from './services/interceptorhttp.service';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { MsjAcademicoRegistradoComponent } from './components/mensajes-de-confirmacion/msj-academico-registrado/msj-academico-registrado.component';
import { MsjActualizarDatosComponent } from './components/mensajes-de-confirmacion/msj-actualizar-datos/msj-actualizar-datos.component';
import { MsjCambiarEstatusComponent } from './components/mensajes-de-confirmacion/msj-cambiar-estatus/msj-cambiar-estatus.component';
import { MsjCancelarRegistroComponent } from './components/mensajes-de-confirmacion/msj-cancelar-registro/msj-cancelar-registro.component';
import { MsjEliminarEstudianteComponent } from './components/mensajes-de-confirmacion/msj-eliminar-estudiante/msj-eliminar-estudiante.component';
import { MsjEstudianteActualizadoComponent } from './components/mensajes-de-confirmacion/msj-estudiante-actualizado/msj-estudiante-actualizado.component';
import { MsjEstudianteEliminadoComponent } from './components/mensajes-de-confirmacion/msj-estudiante-eliminado/msj-estudiante-eliminado.component';
import { MsjEstudianteExisteComponent } from './components/mensajes-de-confirmacion/msj-estudiante-existe/msj-estudiante-existe.component';
import { MsjEstudianteRegistradoComponent } from './components/mensajes-de-confirmacion/msj-estudiante-registrado/msj-estudiante-registrado.component';
import { MsjExisteAcademicoComponent } from './components/mensajes-de-confirmacion/msj-existe-academico/msj-existe-academico.component';
import { MsjRegistrarAcademicoComponent } from './components/mensajes-de-confirmacion/msj-registrar-academico/msj-registrar-academico.component';
import { MsjResgistrarEstudianteComponent } from './components/mensajes-de-confirmacion/msj-resgistrar-estudiante/msj-resgistrar-estudiante.component';
import { Error401Component } from './components/errores/error401/error401.component';
import { Error404Component } from './components/errores/error404/error404.component';
import { EncabezadoAcademicoComponent } from './components/encabezados/encabezado-academico/encabezado-academico.component';
import { EncabezadoEstudianteComponent } from './components/encabezados/encabezado-estudiante/encabezado-estudiante.component';
import { MenuComponent } from './components/encabezados/menu/menu/menu.component';
import { AcercaDeComponent } from './components/encabezados/menu/acerca-de/acerca-de.component';
import { MsjCerrarSesionComponent } from './components/encabezados/menu/msj-cerrar-sesion/msj-cerrar-sesion.component';
import { PrincipalAcademicoComponent } from './components/academico/principal-academico/principal-academico.component';
import { RegistrarEstudianteComponent } from './components/academico/registrar-estudiante/registrar-estudiante.component';
import { EstudiantesRegistradosComponent } from './components/academico/estudiantes-registrados/estudiantes-registrados.component';
import { EditarEstudianteComponent } from './components/academico/editar-estudiante/editar-estudiante.component';
import { AcademicosRegistradosComponent } from './components/administrador/academicos-registrados/academicos-registrados.component';
import { EditarAcademicoComponent } from './components/administrador/editar-academico/editar-academico.component';
import { PrincipalAdministrador1Component } from './components/administrador/principal-administrador1/principal-administrador1.component';
import { PrincipalAdministrador2Component } from './components/administrador/principal-administrador2/principal-administrador2.component';
import { RegistrarAcademicoComponent } from './components/administrador/registrar-academico/registrar-academico.component';
import { PrincipalEstudianteComponent } from './components/estudiante/principal-estudiante/principal-estudiante.component';
import { IntroduccionConjuntosComponent } from './components/estudiante/introduccion-conjuntos/introduccion-conjuntos.component';
import { InformacionTeoriaElementalComponent } from './components/estudiante/introduccion-conjuntos/informacion-teoria-elemental/informacion-teoria-elemental.component';
import { PrincipalConjuntos1Component } from './components/estudiante/conjuntos1/principal-conjuntos1/principal-conjuntos1.component';
import { TeoriaDiferenciaComponent } from './components/estudiante/conjuntos1/teoria-nivel1/teoria-diferencia/teoria-diferencia.component';
import { TeoriaUnionComponent } from './components/estudiante/conjuntos1/teoria-nivel1/teoria-union/teoria-union.component';
import { TeoriaInterseccionComponent } from './components/estudiante/conjuntos1/teoria-nivel1/teoria-interseccion/teoria-interseccion.component';
import { TeoriaDiferenciaSimetricaComponent } from './components/estudiante/conjuntos1/teoria-nivel1/teoria-diferencia-simetrica/teoria-diferencia-simetrica.component';
import { PrincipalConjuntos2Component } from './components/estudiante/conjuntos2/principal-conjuntos2/principal-conjuntos2.component';
import { EvaluacionN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/evaluacion-n1/evaluacion-n1.component';
import { MsjEvaluacionN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/evaluacion-n1/msj-evaluacion-n1/msj-evaluacion-n1.component';
import { DiferenciaN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/diferencia-n1/diferencia-n1.component';
import { DiferenciaSimetricaN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/diferencia-simetrica-n1/diferencia-simetrica-n1.component';
import { InterseccionN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/interseccion-n1/interseccion-n1.component';
import { UnionN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/union-n1/union-n1.component';
import { MsjDiferenciaN1FinalizadoComponent } from './components/estudiante/conjuntos1/ejercicios-nivel1/diferencia-n1/msj-diferencia-n1-finalizado/msj-diferencia-n1-finalizado.component';
import { MsjDiferenciaSimetricaN1FinalizadoComponent } from './components/estudiante/conjuntos1/ejercicios-nivel1/diferencia-simetrica-n1/msj-diferencia-simetrica-n1-finalizado/msj-diferencia-simetrica-n1-finalizado.component';
import { MsjEvaluacionN1FinalizadoComponent } from './components/estudiante/conjuntos1/ejercicios-nivel1/evaluacion-n1/msj-evaluacion-n1-finalizado/msj-evaluacion-n1-finalizado.component';
import { MsjInterseccionN1FinalizadoComponent } from './components/estudiante/conjuntos1/ejercicios-nivel1/interseccion-n1/msj-interseccion-n1-finalizado/msj-interseccion-n1-finalizado.component';
import { MsjUnionN1FinalizadoComponent } from './components/estudiante/conjuntos1/ejercicios-nivel1/union-n1/msj-union-n1-finalizado/msj-union-n1-finalizado.component';
import { DiferenciaN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/diferencia-n2/diferencia-n2.component';
import { MsjDiferenciaN2FinalizadoComponent } from './components/estudiante/conjuntos2/ejercicios-nivel2/diferencia-n2/msj-diferencia-n2-finalizado/msj-diferencia-n2-finalizado.component';
import { DiferenciaSimetricaN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/diferencia-simetrica-n2/diferencia-simetrica-n2.component';
import { MsjDiferenciaSimetricaN2FinalizadoComponent } from './components/estudiante/conjuntos2/ejercicios-nivel2/diferencia-simetrica-n2/msj-diferencia-simetrica-n2-finalizado/msj-diferencia-simetrica-n2-finalizado.component';
import { EvaluacionN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/evaluacion-n2/evaluacion-n2.component';
import { MsjEvaluacionN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/evaluacion-n2/msj-evaluacion-n2/msj-evaluacion-n2.component';
import { MsjEvaluacionN2FinalizadoComponent } from './components/estudiante/conjuntos2/ejercicios-nivel2/evaluacion-n2/msj-evaluacion-n2-finalizado/msj-evaluacion-n2-finalizado.component';
import { InterseccionN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/interseccion-n2/interseccion-n2.component';
import { MsjInterseccionN2FinalizadoComponent } from './components/estudiante/conjuntos2/ejercicios-nivel2/interseccion-n2/msj-interseccion-n2-finalizado/msj-interseccion-n2-finalizado.component';
import { UnionN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/union-n2/union-n2.component';
import { MsjUnionN2FinalizadoComponent } from './components/estudiante/conjuntos2/ejercicios-nivel2/union-n2/msj-union-n2-finalizado/msj-union-n2-finalizado.component';
import { Encabezado401Component } from './components/encabezados/encabezado401/encabezado401.component';
import { ComplementoN1Component } from './components/estudiante/conjuntos1/ejercicios-nivel1/complemento-n1/complemento-n1.component';
import { ComplementoN2Component } from './components/estudiante/conjuntos2/ejercicios-nivel2/complemento-n2/complemento-n2.component';
import { MsjComplementoN1FinalizadoComponent } from './components/estudiante/conjuntos1/ejercicios-nivel1/complemento-n1/msj-complemento-n1-finalizado/msj-complemento-n1-finalizado.component';
import { MsjComplementoN2FinalizadoComponent } from './components/estudiante/conjuntos2/ejercicios-nivel2/complemento-n2/msj-complemento-n2-finalizado/msj-complemento-n2-finalizado.component';
import { MsjEstatusActualizadoComponent } from './components/mensajes-de-confirmacion/msj-estatus-actualizado/msj-estatus-actualizado.component';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, FooterComponent, MsjAcademicoRegistradoComponent, MsjActualizarDatosComponent,
    MsjCambiarEstatusComponent, MsjCancelarRegistroComponent, MsjEliminarEstudianteComponent, MsjEstudianteActualizadoComponent,
    MsjEstudianteEliminadoComponent, MsjEstudianteExisteComponent, MsjEstudianteRegistradoComponent, MsjExisteAcademicoComponent,
    MsjRegistrarAcademicoComponent, MsjResgistrarEstudianteComponent, Error401Component, Error404Component, EncabezadoAcademicoComponent,
    EncabezadoEstudianteComponent, MenuComponent, AcercaDeComponent, MsjCerrarSesionComponent, PrincipalAcademicoComponent,
    RegistrarEstudianteComponent, EstudiantesRegistradosComponent, EditarEstudianteComponent, AcademicosRegistradosComponent,
    EditarAcademicoComponent, PrincipalAdministrador1Component, PrincipalAdministrador2Component, RegistrarAcademicoComponent,
    PrincipalEstudianteComponent, IntroduccionConjuntosComponent, InformacionTeoriaElementalComponent, PrincipalConjuntos1Component,
    TeoriaDiferenciaComponent, TeoriaUnionComponent, TeoriaInterseccionComponent, TeoriaDiferenciaSimetricaComponent,
    PrincipalConjuntos2Component, EvaluacionN1Component, MsjEvaluacionN1Component, DiferenciaN1Component,
    DiferenciaSimetricaN1Component, InterseccionN1Component, UnionN1Component, MsjDiferenciaN1FinalizadoComponent,
    MsjDiferenciaSimetricaN1FinalizadoComponent, MsjEvaluacionN1FinalizadoComponent, MsjInterseccionN1FinalizadoComponent,
    MsjUnionN1FinalizadoComponent, DiferenciaN2Component, MsjDiferenciaN2FinalizadoComponent, DiferenciaSimetricaN2Component,
    MsjDiferenciaSimetricaN2FinalizadoComponent, EvaluacionN2Component, MsjEvaluacionN2Component, MsjEvaluacionN2FinalizadoComponent,
    InterseccionN2Component, MsjInterseccionN2FinalizadoComponent, UnionN2Component, MsjUnionN2FinalizadoComponent, Encabezado401Component, 
    ComplementoN1Component, ComplementoN2Component, MsjComplementoN1FinalizadoComponent, MsjComplementoN2FinalizadoComponent, 
    MsjEstatusActualizadoComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialDesignModule, HttpClientModule,
    ReactiveFormsModule, FormsModule, NgxSpinnerModule, FlexLayoutModule
  ],
  entryComponents: [
    MsjAcademicoRegistradoComponent, MsjActualizarDatosComponent, MsjCambiarEstatusComponent, MsjCancelarRegistroComponent,
    MsjEliminarEstudianteComponent, MsjEstudianteActualizadoComponent, MsjEstudianteEliminadoComponent, MsjEstudianteExisteComponent,
    MsjEstudianteRegistradoComponent, MsjExisteAcademicoComponent, MsjRegistrarAcademicoComponent, MsjResgistrarEstudianteComponent,
    MenuComponent, MsjCerrarSesionComponent, MsjEvaluacionN1Component, MsjDiferenciaN1FinalizadoComponent,
    MsjDiferenciaSimetricaN1FinalizadoComponent, MsjEvaluacionN1FinalizadoComponent, MsjInterseccionN1FinalizadoComponent,
    MsjUnionN1FinalizadoComponent, MsjDiferenciaN2FinalizadoComponent, MsjDiferenciaSimetricaN2FinalizadoComponent, MsjEvaluacionN2Component,
    MsjEvaluacionN2FinalizadoComponent, MsjInterseccionN2FinalizadoComponent, MsjUnionN2FinalizadoComponent, MsjEstatusActualizadoComponent,
    MsjComplementoN1FinalizadoComponent, MsjComplementoN2FinalizadoComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorhttpService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
