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


@NgModule({
  declarations: [
    AppComponent, LoginComponent, FooterComponent, MsjAcademicoRegistradoComponent, MsjActualizarDatosComponent,
    MsjCambiarEstatusComponent, MsjCancelarRegistroComponent, MsjEliminarEstudianteComponent, MsjEstudianteActualizadoComponent,
    MsjEstudianteEliminadoComponent, MsjEstudianteExisteComponent, MsjEstudianteRegistradoComponent, MsjExisteAcademicoComponent,
    MsjRegistrarAcademicoComponent, MsjResgistrarEstudianteComponent, Error401Component, Error404Component, EncabezadoAcademicoComponent,
    EncabezadoEstudianteComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialDesignModule, HttpClientModule,
    ReactiveFormsModule, FormsModule, NgxSpinnerModule, FlexLayoutModule
  ],
  entryComponents: [
    MsjAcademicoRegistradoComponent, MsjActualizarDatosComponent, MsjCambiarEstatusComponent, MsjCancelarRegistroComponent,
    MsjEliminarEstudianteComponent, MsjEstudianteActualizadoComponent, MsjEstudianteEliminadoComponent, MsjEstudianteExisteComponent,
    MsjEstudianteRegistradoComponent, MsjExisteAcademicoComponent, MsjRegistrarAcademicoComponent, MsjResgistrarEstudianteComponent,
    MenuComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorhttpService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
