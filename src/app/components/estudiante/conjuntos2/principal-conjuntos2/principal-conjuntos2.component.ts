import { Component, OnInit } from '@angular/core';
import { MsjEvaluacionN2Component } from '../ejercicios-nivel2/evaluacion-n2/msj-evaluacion-n2/msj-evaluacion-n2.component';
import { Puntajeestudiante } from 'src/app/models/Puntajeestudiante';
import { Router } from '@angular/router';
import { PuntajeestudianteService } from '../../../../services/puntajeestudiante.service';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-principal-conjuntos2',
  templateUrl: './principal-conjuntos2.component.html',
  styleUrls: ['./principal-conjuntos2.component.scss']
})
export class PrincipalConjuntos2Component implements OnInit {

  constructor(private puntajeEstudianteService: PuntajeestudianteService, private loginService: LoginService,
    private route: Router, private dialog: MatDialog) { }

  listPuntaje: Puntajeestudiante[] = [];
  
  practicarDeNuevo = true;
  practicar = false;
  practicarUnion = false;
  practicarInterseccion = false;
  practicarDiferencia = false;
  practicarDiferenciaS = false;
  practicarEvaluacion = false;
  practicarComplemento = false;
  mostrarCheckUnion = true;
  mostrarCheckEvaluacion = true;
  mostrarCheckDiferencia = true;
  mostrarCheckInterseccion = true;
  mostrarCheckDiferenciaS = true;
  mostrarCheckComplemento = true;
  practicarDeNuevoUnion = true;
  practicarDeNuevoDiferencia = true;
  practicarDeNuevoDiferenciaS = true;
  practicarDeNuevoInterseccion = true;
  practicarDeNuevoEvaluacion = true;
  practicarDeNuevoComplemento = true;

  ngOnInit() {
    this.getPuntajeUnion2();
    this.getPuntajeInterseccion2();
    this.getPuntajeDiferencia2();
    this.getPuntajeDiferenciaSimetrica2();
    this.getPuntajeEvaluacion2();
    this.getPuntajeComplemento();
  }

  getPuntajeUnion2() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listPuntajeEstudiante = this.listPuntaje.find(elemento => elemento.tipoejercicio == 'Union-2');
        if (listPuntajeEstudiante == undefined) {
          this.mostrarCheckUnion = true;
          this.practicarDeNuevoUnion = true;
          this.practicarUnion = false;
        } else if (listPuntajeEstudiante != undefined && listPuntajeEstudiante.tipoejercicio == 'Union-2' && listPuntajeEstudiante.puntaje == 10) {
          this.mostrarCheckUnion = false;
          this.practicarDeNuevoUnion = false;
          this.practicarUnion = true;
        }
      }
    );
  }

  getPuntajeInterseccion2() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listInterseccion = this.listPuntaje.find(data => data.tipoejercicio == 'Interseccion-2');
        if (listInterseccion == undefined) {
          this.mostrarCheckInterseccion = true;
          this.practicarDeNuevoInterseccion = true;
          this.practicarInterseccion = false;
        } else if (listInterseccion != undefined && listInterseccion.tipoejercicio == 'Interseccion-2' && listInterseccion.puntaje == 10) {
          this.mostrarCheckInterseccion = false;
          this.practicarDeNuevoInterseccion = false;
          this.practicarInterseccion = true;
        }
      }
    );
  }

  getPuntajeDiferencia2() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listDiferencia = this.listPuntaje.find(data => data.tipoejercicio == 'Diferencia-2');
        if (listDiferencia == undefined) {
          this.mostrarCheckDiferencia = true;
          this.practicarDeNuevoDiferencia = true;
          this.practicarDiferencia = false;
        } else if (listDiferencia != undefined && listDiferencia.tipoejercicio == 'Diferencia-2' && listDiferencia.puntaje == 10) {
          this.mostrarCheckDiferencia = false;
          this.practicarDeNuevoDiferencia = false;
          this.practicarDiferencia = true;
        }
      }
    );
  }

  getPuntajeDiferenciaSimetrica2() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listDiferenciaS = this.listPuntaje.find(data => data.tipoejercicio == 'DS-2');
        if (listDiferenciaS == undefined) {
          this.mostrarCheckDiferenciaS = true;
          this.practicarDeNuevoDiferenciaS = true;
          this.practicarDiferenciaS = false;
        } else if (listDiferenciaS != undefined && listDiferenciaS.tipoejercicio == 'DS-2' && listDiferenciaS.puntaje == 10) {
          this.mostrarCheckDiferenciaS = false;
          this.practicarDeNuevoDiferenciaS = false;
          this.practicarDiferenciaS = true;
        }
      }
    );
  }

  getPuntajeComplemento() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listDiferenciaS = this.listPuntaje.find(data => data.tipoejercicio == 'Complemento-2');
        if (listDiferenciaS == undefined) {
          this.mostrarCheckComplemento = true;
          this.practicarDeNuevoComplemento = true;
          this.practicarComplemento = false;
        } else if (listDiferenciaS != undefined && listDiferenciaS.tipoejercicio == 'Complemento-2' && listDiferenciaS.puntaje == 10) {
          this.mostrarCheckComplemento = false;
          this.practicarDeNuevoComplemento = false;
          this.practicarComplemento = true;
        }
      }
    );
  }

  getPuntajeEvaluacion2() {
    let matricula = this.getMatricula();
    this.puntajeEstudianteService.getPuntaje(matricula).subscribe(
      result => {
        this.listPuntaje = result;
        const listPuntajeUnion = this.listPuntaje.find(elemento => elemento.tipoejercicio == 'Union-2');
        const listInterseccion = this.listPuntaje.find(data => data.tipoejercicio == 'Interseccion-2');
        const listComplemento = this.listPuntaje.find(data => data.tipoejercicio == 'Complemento-2');
        const listDiferencia = this.listPuntaje.find(data => data.tipoejercicio == 'Diferencia-2');
        const listDiferenciaS = this.listPuntaje.find(data => data.tipoejercicio == 'DS-2');
        const listEvaluacion = this.listPuntaje.find(data => data.tipoejercicio == 'E-2');
        if (listPuntajeUnion != undefined && listInterseccion != undefined && listDiferenciaS != undefined
          && listDiferencia != undefined && listEvaluacion != undefined && listComplemento != undefined) {
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
        const listPuntajeUnion = this.listPuntaje.find(elemento => elemento.tipoejercicio == 'Union-2');
        const listInterseccion = this.listPuntaje.find(data => data.tipoejercicio == 'Interseccion-2');
        const listDiferencia = this.listPuntaje.find(data => data.tipoejercicio == 'Diferencia-2');
        const listComplemento = this.listPuntaje.find(data => data.tipoejercicio == 'Complemento-2');
        const listDiferenciaS = this.listPuntaje.find(data => data.tipoejercicio == 'DS-2');
        if (listPuntajeUnion != undefined && listInterseccion != undefined && listDiferenciaS != undefined
          && listDiferencia != undefined && listComplemento != undefined) {
          this.route.navigate(['/home-estudiante/evaluacion-2']);
        } else {
          const dialogRef = this.dialog.open(MsjEvaluacionN2Component, {
            width: '450px',
            panelClass: 'msj-nivel-finalizado',
            autoFocus: false
          });
        }
      }
    );
  }

  evaluarDenuevo() {
    this.route.navigate(['/home-estudiante/evaluacion-2']);
  }

  getMatricula(): string {
    return this.loginService.getMatriculaToken();
  }
}