import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ejercicionivel1 } from 'src/app/models/Ejercicionivel1';
import { PuntajeEjercicio } from 'src/app/models/PuntajeEjercicio';
import { MsjEvaluacionN1FinalizadoComponent } from './msj-evaluacion-n1-finalizado/msj-evaluacion-n1-finalizado.component';
import { EjerciciosService } from 'src/app/services/ejercicios.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/services/login.service';
import { PuntajeestudianteService } from '../../../../../services/puntajeestudiante.service';

@Component({
  selector: 'app-evaluacion-n1',
  templateUrl: './evaluacion-n1.component.html',
  styleUrls: ['./evaluacion-n1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EvaluacionN1Component implements OnInit {

  listEjercicioEvaluacionUno: Ejercicionivel1[] = [];
  listEjercicioEvaluacionDos: Ejercicionivel1[] = [];
  listEjercicioEvaluacionTres: Ejercicionivel1[] = [];
  listEjercicioEvaluacionCuatro: Ejercicionivel1[] = [];
  listEjercicioEvaluacionCinco: Ejercicionivel1[] = [];
  listEjercicioEvaluacionSeis: Ejercicionivel1[] = [];
  listEjercicioEvaluacionSiete: Ejercicionivel1[] = [];
  listEjercicioEvaluacionOcho: Ejercicionivel1[] = [];

  habilitarExpansionPanelPregeunta1 = false;
  habilitarExpansionPanelPregeunta2 = false;
  habilitarExpansionPanelPregeunta3 = false;
  habilitarExpansionPanelPregeunta4 = false;
  habilitarExpansionPanelPregeunta5 = false;
  habilitarExpansionPanelPregeunta6 = false;
  habilitarExpansionPanelPregeunta7 = false;
  habilitarExpansionPanelPregeunta8 = false;
  solucionRespuestaA = true;
  solucionRespuestaB = true;
  solucionRespuestaC = true;
  solucionRespuestaD = true;

  mostrarIcono1 = true;
  mostrarIcono2 = true;
  mostrarIcono3 = true;
  mostrarIcono4 = true;
  mostrarIcono5 = true;
  mostrarIcono6 = true;
  mostrarIcono7 = true;
  mostrarIcono8 = true;

  step = 0;
  validarRespuesta = true;
  respuestaCorrecta: string;

  constructor(private serviceEjercicio: EjerciciosService, private SpinnerService: NgxSpinnerService, public dialog: MatDialog,
    private puntajeEstudianteService: PuntajeestudianteService, private loginService: LoginService) { }

  ngOnInit() {
    this.getTodosEjerciciosEvaluacion();
  }

  getTodosEjerciciosEvaluacion() {
    this.SpinnerService.show();
    this.serviceEjercicio.getEjerciciosPorTipoNivel1('Evaluación 1').subscribe(
      result => {
        this.listEjercicioEvaluacionUno.push(result[0]);
        this.listEjercicioEvaluacionDos.push(result[1]);
        this.listEjercicioEvaluacionTres.push(result[2]);
        this.listEjercicioEvaluacionCuatro.push(result[3]);
        this.listEjercicioEvaluacionCinco.push(result[4]);
        this.listEjercicioEvaluacionSeis.push(result[5]);
        this.listEjercicioEvaluacionSiete.push(result[6]);
        this.listEjercicioEvaluacionOcho.push(result[7]);
        this.SpinnerService.hide();
      }
    );
  }

  respuestaA(ejercicio: Ejercicionivel1) {
    this.validarRespuestasA(ejercicio);

  }

  respuestaB(ejercicio: Ejercicionivel1) {
    this.validarRespuestasB(ejercicio);
  }

  respuestaC(ejercicio: Ejercicionivel1) {
    this.validarRespuestasC(ejercicio);
  }

  respuestaD(ejercicio: Ejercicionivel1) {
    this.validarRespuestasD(ejercicio);
  }

  validarRespuestasA(ejercicio: Ejercicionivel1) {
    let respuestaA = ejercicio.respuestaa;
    let idEjercicio = ejercicio.idejercicionivel1;
    if (respuestaA == ejercicio.respuestacorrecta) {
      if (idEjercicio == 33) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta2 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta1 = false;
        this.mostrarIcono1 = false;
        this.solucionRespuestaB = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      } else if (idEjercicio == 36) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta4 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta4 = false;
        this.mostrarIcono4 = false;
        this.solucionRespuestaB = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      } else if (idEjercicio == 38) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta7 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta6 = false;
        this.mostrarIcono6 = false;
        this.solucionRespuestaB = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      } else if (idEjercicio == 39) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta8 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta7 = false;
        this.mostrarIcono7 = false;
        this.solucionRespuestaB = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      }
    } else if (idEjercicio == 34 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 35 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 37 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 40 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    }
  }

  validarRespuestasB(ejercicio: Ejercicionivel1) {
    let respuestaB = ejercicio.respuestab;
    let idEjercicio = ejercicio.idejercicionivel1;
    if (respuestaB == ejercicio.respuestacorrecta) {
      if (idEjercicio == 10) {
      }
    } else if (idEjercicio == 33 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaC = true; // Ocultar solucion respuesta C
      this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 34 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 35 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 36 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaC = true; // Ocultar solucion respuesta C
      this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 37 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 38 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaC = true; // Ocultar solucion respuesta C
      this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 39 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaC = true; // Ocultar solucion respuesta C
      this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 40 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    }
  }

  validarRespuestasC(ejercicio: Ejercicionivel1) {
    let respuestaC = ejercicio.respuestac;
    let idEjercicio = ejercicio.idejercicionivel1;
    if (respuestaC == ejercicio.respuestacorrecta) {
      if (idEjercicio == 37) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta6 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta5 = false;
        this.mostrarIcono5 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta B
        this.solucionRespuestaB = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      } else if (idEjercicio == 40) {
        this.validarRespuesta = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta8 = false;
        this.mostrarIcono8 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta B
        this.solucionRespuestaB = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D

        let tipo = 'E-1';
        let puntos = 10;
        let matricula = this.getMatricula();

        let puntajeEstudiante: PuntajeEjercicio = new PuntajeEjercicio(
          puntos, tipo, matricula
        );

        this.puntajeEstudianteService.resgistrarPuntaje(puntajeEstudiante).subscribe(
          result => {
          },
          error => {
          }
        );

        const dialogRef = this.dialog.open(MsjEvaluacionN1FinalizadoComponent, {
          width: '450px',
          panelClass: 'msj-nivel-finalizado',
          autoFocus: false
        });
      }
    } else if (idEjercicio == 33 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false;
      this.solucionRespuestaB = true; // ocultar solucion B 
      this.solucionRespuestaD = true; // ocultar solucion C
      this.validarRespuesta = true;  // ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 34 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 35 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 36 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false;
      this.solucionRespuestaB = true; // ocultar solucion B 
      this.solucionRespuestaD = true; // ocultar solucion C
      this.validarRespuesta = true;  // ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 38 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false;
      this.solucionRespuestaB = true; // ocultar solucion B 
      this.solucionRespuestaD = true; // ocultar solucion C
      this.validarRespuesta = true;  // ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 39 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false;
      this.solucionRespuestaB = true; // ocultar solucion B 
      this.solucionRespuestaD = true; // ocultar solucion C
      this.validarRespuesta = true;  // ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    }
  }

  validarRespuestasD(ejercicio: Ejercicionivel1) {
    let respuestaD = ejercicio.respuestad;
    let idEjercicio = ejercicio.idejercicionivel1;
    if (respuestaD == ejercicio.respuestacorrecta) {
      if (idEjercicio == 34) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta3 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta2 = false;
        this.mostrarIcono2 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta B
        this.solucionRespuestaB = true; // Ocultar solucion respuesta C
        this.solucionRespuestaC = true; // Ocultar solucion respuesta D
      } else if (idEjercicio == 35) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta4 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta3 = false;
        this.mostrarIcono3 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta B
        this.solucionRespuestaB = true; // Ocultar solucion respuesta C
        this.solucionRespuestaC = true; // Ocultar solucion respuesta D
      }
    } else if (idEjercicio == 33 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false;
      this.solucionRespuestaB = true; // Ocultar solucion B 
      this.solucionRespuestaC = true; // Ocultar solucion C
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 36 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false;
      this.solucionRespuestaB = true; // Ocultar solucion B 
      this.solucionRespuestaC = true; // Ocultar solucion C
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 37 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 38 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false;
      this.solucionRespuestaB = true; // Ocultar solucion B 
      this.solucionRespuestaC = true; // Ocultar solucion C
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 39 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false;
      this.solucionRespuestaB = true; // Ocultar solucion B 
      this.solucionRespuestaC = true; // Ocultar solucion C
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 40 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    }
  }

  verSolucion(ejercicio: Ejercicionivel1) {
    let idEjercicio = ejercicio.idejercicionivel1;
    if (idEjercicio == 33) { // mostrar respuesta correcta y cerrar solucion
      this.validarRespuesta = false;
      this.solucionRespuestaB = true; // Ocultar solucion respuesta B, C Y D
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 34) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion A, C, D
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
    } else if (idEjercicio == 35) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion A, C, D
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
    } else if (idEjercicio == 36) { // mostrar respuesta correcta y cerrar solucion
      this.validarRespuesta = false;
      this.solucionRespuestaB = true; // Ocultar solucion respuesta B, C Y D
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 37) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion 
      this.solucionRespuestaB = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 38) { // mostrar respuesta correcta y cerrar solucion
      this.validarRespuesta = false;
      this.solucionRespuestaB = true; // Ocultar solucion respuesta B, C Y D
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 39) { // mostrar respuesta correcta y cerrar solucion
      this.validarRespuesta = false;
      this.solucionRespuestaB = true; // Ocultar solucion respuesta B, C Y D
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 40) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion 
      this.solucionRespuestaB = true;
      this.solucionRespuestaD = true;
    }
  }

  getMatricula(): string {
    return this.loginService.getMatriculaToken();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }
}