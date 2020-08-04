import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Puntajeestudiante } from 'src/app/models/Puntajeestudiante';
import { MatDialog } from '@angular/material';
import { PuntajeestudianteService } from '../../../../services/puntajeestudiante.service';
import { MsjEvaluacionN1Component } from '../ejercicios-nivel1/evaluacion-n1/msj-evaluacion-n1/msj-evaluacion-n1.component';

@Component({
  selector: 'app-principal-conjuntos1',
  templateUrl: './principal-conjuntos1.component.html',
  styleUrls: ['./principal-conjuntos1.component.scss']
})
export class PrincipalConjuntos1Component implements OnInit {

  practicarDeNuevo = true;
  practicar = false;
  practicarUnion = false;
  practicarInterseccion = false;
  practicarDiferencia = false;
  practicarDiferenciaS = false;
  practicarEvaluacion = false;
  mostrarCheckUnion = true;
  mostrarCheckEvaluacion = true;
  mostrarCheckDiferencia = true;
  mostrarCheckInterseccion = true;
  mostrarCheckDiferenciaS = true;
  practicarDeNuevoUnion = true;
  practicarDeNuevoDiferencia = true;
  practicarDeNuevoDiferenciaS = true;
  practicarDeNuevoInterseccion = true;
  practicarDeNuevoEvaluacion = true;
  listPuntaje: Puntajeestudiante[] = [];

  constructor(private route: Router, public dialog: MatDialog, private puntajeEstudianteService: PuntajeestudianteService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.getPuntajeUnion();
    this.getPuntajeInterseccion();
    this.getPuntajeDiferencia();
    this.getPuntajeDiferenciaSimetrica();
    this.getPuntajeEvaluacion();
  }

  getPuntajeUnion() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listPuntajeEstudiante = this.listPuntaje.find(elemento => elemento.tipoejercicio == 'Unión 1');
        if (listPuntajeEstudiante == undefined) {
          this.mostrarCheckUnion = true;
          this.practicarDeNuevoUnion = true;
          this.practicarUnion = false;
        } else if (listPuntajeEstudiante != undefined && listPuntajeEstudiante.tipoejercicio == 'Unión 1' && listPuntajeEstudiante.puntaje == 10) {
          this.mostrarCheckUnion = false;
          this.practicarDeNuevoUnion = false;
          this.practicarUnion = true;
        }
      }
    );
  }

  getPuntajeInterseccion() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listInterseccion = this.listPuntaje.find(data => data.tipoejercicio == 'Intersección 1');
        if (listInterseccion == undefined) {
          this.mostrarCheckInterseccion = true;
          this.practicarDeNuevoInterseccion = true;
          this.practicarInterseccion = false;
        } else if (listInterseccion != undefined && listInterseccion.tipoejercicio == 'Intersección 1' && listInterseccion.puntaje == 10) {
          this.mostrarCheckInterseccion = false;
          this.practicarDeNuevoInterseccion = false;
          this.practicarInterseccion = true;
        }
      }
    );
  }

  getPuntajeDiferencia() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listDiferencia = this.listPuntaje.find(data => data.tipoejercicio == 'Diferencia 1');
        if (listDiferencia == undefined) {
          this.mostrarCheckDiferencia = true;
          this.practicarDeNuevoDiferencia = true;
          this.practicarDiferencia = false;
        } else if (listDiferencia != undefined && listDiferencia.tipoejercicio == 'Diferencia 1' && listDiferencia.puntaje == 10) {
          this.mostrarCheckDiferencia = false;
          this.practicarDeNuevoDiferencia = false;
          this.practicarDiferencia = true;
        }
      }
    );
  }

  getPuntajeDiferenciaSimetrica() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listDiferenciaS = this.listPuntaje.find(data => data.tipoejercicio == 'DS-1');
        if (listDiferenciaS == undefined) {
          this.mostrarCheckDiferenciaS = true;
          this.practicarDeNuevoDiferenciaS = true;
          this.practicarDiferenciaS = false;
        } else if (listDiferenciaS != undefined && listDiferenciaS.tipoejercicio == 'DS-1' && listDiferenciaS.puntaje == 10) {
          this.mostrarCheckDiferenciaS = false;
          this.practicarDeNuevoDiferenciaS = false;
          this.practicarDiferenciaS = true;
        }
      }
    );
  }

  getPuntajeEvaluacion() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listPuntajeUnion = this.listPuntaje.find(elemento => elemento.tipoejercicio == 'Unión 1');
        const listInterseccion = this.listPuntaje.find(data => data.tipoejercicio == 'Intersección 1');
        const listDiferencia = this.listPuntaje.find(data => data.tipoejercicio == 'Diferencia 1');
        const listDiferenciaS = this.listPuntaje.find(data => data.tipoejercicio == 'DS-1');
        const listEvaluacion = this.listPuntaje.find(data => data.tipoejercicio == 'E-1');
        if (listPuntajeUnion != undefined && listInterseccion != undefined && listDiferenciaS != undefined
          && listDiferencia != undefined && listEvaluacion != undefined) {
          this.mostrarCheckEvaluacion = false;
          this.practicarDeNuevoEvaluacion = false;
          this.practicarEvaluacion = true;
        } else {
          this.mostrarCheckEvaluacion = true;
          this.practicarDeNuevoEvaluacion = true;
          this.practicarEvaluacion = false;
        }
      }
    );
  }

  evaluar() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listPuntajeUnion = this.listPuntaje.find(elemento => elemento.tipoejercicio == 'Unión 1');
        const listInterseccion = this.listPuntaje.find(data => data.tipoejercicio == 'Intersección 1');
        const listDiferencia = this.listPuntaje.find(data => data.tipoejercicio == 'Diferencia 1');
        const listDiferenciaS = this.listPuntaje.find(data => data.tipoejercicio == 'DS-1');
        if (listPuntajeUnion != undefined && listInterseccion != undefined && listDiferenciaS != undefined
          && listDiferencia != undefined) {
          this.route.navigate(['/home-estudiante/evaluacion-1']);

        } else {
          const dialogRef = this.dialog.open(MsjEvaluacionN1Component, {
            width: '450px',
            panelClass: 'msj-nivel-finalizado',
            autoFocus: false
          });
        }
      }
    );
  }

  evaluarDenuevo() {
    this.route.navigate(['/home-estudiante/evaluacion-1']);
  }

  getMatricula(): string {
    return this.loginService.getMatriculaToken();
  }
}