import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ejercicionivel1 } from 'src/app/models/Ejercicionivel1';
import { MsjUnionN1FinalizadoComponent } from './msj-union-n1-finalizado/msj-union-n1-finalizado.component';
import { PuntajeEjercicio } from 'src/app/models/PuntajeEjercicio';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/services/login.service';
import { PuntajeestudianteService } from '../../../../../services/puntajeestudiante.service';
import { EjerciciosService } from 'src/app/services/ejercicios.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-union-n1',
  templateUrl: './union-n1.component.html',
  styleUrls: ['./union-n1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnionN1Component implements OnInit {

  listEjercicioUnion: Ejercicionivel1[] = [];
  listEjercicioUno: Ejercicionivel1[] = [];
  listEjercicioDos: Ejercicionivel1[] = [];
  listEjercicioTres: Ejercicionivel1[] = [];
  listEjercicioCuatro: Ejercicionivel1[] = [];
  listEjercicioCinco: Ejercicionivel1[] = [];
  listEjercicioSeis: Ejercicionivel1[] = [];
  listEjercicioSiete: Ejercicionivel1[] = [];
  listEjercicioOcho: Ejercicionivel1[] = [];
  panelOpenState = false;
  validarRespuesta = true;
  botonSiguiente1 = false;
  botonSiguiente2 = false;
  botonSiguiente3 = false;
  botonSiguiente4 = false;
  botonSiguiente5 = false;
  mostrarIcono1 = true;
  mostrarIcono2 = true;
  mostrarIcono3 = true;
  mostrarIcono4 = true;
  mostrarIcono5 = true;
  mostrarIcono6 = true;
  mostrarIcono7 = true;
  mostrarIcono8 = true;
  habilitarExpansionPanelPregeunta1: false;
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
  respuestaCorrecta: string;
  step = 0;

  constructor(private serviceEjercicio: EjerciciosService, private SpinnerService: NgxSpinnerService,
    public dialog: MatDialog, private puntajeEstudianteService: PuntajeestudianteService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.getTodosEjercicios();
  }

  getTodosEjercicios() {
    this.SpinnerService.show();
    this.serviceEjercicio.getEjerciciosPorTipoNivel1('Unión 1').subscribe(
      result => {
        this.listEjercicioUnion = result;
        this.listEjercicioUno.push(this.listEjercicioUnion[0]);
        this.listEjercicioDos.push(this.listEjercicioUnion[1]);
        this.listEjercicioTres.push(this.listEjercicioUnion[2]);
        this.listEjercicioCuatro.push(this.listEjercicioUnion[3]);
        this.listEjercicioCinco.push(this.listEjercicioUnion[4]);
        this.listEjercicioSeis.push(this.listEjercicioUnion[5]);
        this.listEjercicioSiete.push(this.listEjercicioUnion[6]);
        this.listEjercicioOcho.push(this.listEjercicioUnion[7]);
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
      if (idEjercicio == 1) { // habilitar panel 2 y inhabilitar el 1, mostrar icono de check
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta2 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta1 = false;
        this.mostrarIcono1 = false;
        this.solucionRespuestaB = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      } else if (idEjercicio == 4) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta5 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta4 = false;
        this.mostrarIcono4 = false;
        this.solucionRespuestaB = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      } else if (idEjercicio == 8) {
        this.validarRespuesta = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta8 = false;
        this.mostrarIcono8 = false;
        this.solucionRespuestaB = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D

        let tipo = 'Unión 1';
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
        )

        const dialogRef = this.dialog.open(MsjUnionN1FinalizadoComponent, {
          width: '450px',
          panelClass: 'msj-nivel-finalizado',
          autoFocus: false
        });

      }
    } else if (idEjercicio == 2 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 3 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 5 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 6 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 7 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    }
  }

  validarRespuestasB(ejercicio: Ejercicionivel1) {
    let respuestaB = ejercicio.respuestab;
    let idEjercicio = ejercicio.idejercicionivel1;
    if (respuestaB == ejercicio.respuestacorrecta) {
      if (idEjercicio == 2) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta3 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta2 = false;
        this.mostrarIcono2 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      }
    } else if (idEjercicio == 1 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaC = true; // Ocultar solucion respuesta C
      this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 3 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 4 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 5 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 6 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 7 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 8 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaC = true; // Ocultar solucion respuesta C
      this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    }
  }

  validarRespuestasC(ejercicio: Ejercicionivel1) {
    let respuestaC = ejercicio.respuestac;
    let idEjercicio = ejercicio.idejercicionivel1;
    if (respuestaC == ejercicio.respuestacorrecta) {
      if (idEjercicio == 5) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta6 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta5 = false;
        this.mostrarIcono5 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta B
        this.solucionRespuestaB = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      }
    } else if (idEjercicio == 1 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false;
      this.solucionRespuestaB = true; // ocultar solucion B 
      this.solucionRespuestaD = true; // ocultar solucion C
      this.validarRespuesta = true;  // ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 2 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 3 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 4 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 6 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 7 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 8 && respuestaC != ejercicio.respuestacorrecta) {
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
      if (idEjercicio == 3) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta4 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta3 = false;
        this.mostrarIcono3 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta B
        this.solucionRespuestaB = true; // Ocultar solucion respuesta C
        this.solucionRespuestaC = true; // Ocultar solucion respuesta D
      } else if (idEjercicio == 6) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta7 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta6 = false;
        this.mostrarIcono6 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta B
        this.solucionRespuestaB = true; // Ocultar solucion respuesta C
        this.solucionRespuestaC = true; // Ocultar solucion respuesta D
      } else if (idEjercicio == 7) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta8 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta7 = false;
        this.mostrarIcono7 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta B
        this.solucionRespuestaB = true; // Ocultar solucion respuesta C
        this.solucionRespuestaC = true; // Ocultar solucion respuesta D
      }
    } else if (idEjercicio == 1 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false;
      this.solucionRespuestaB = true; // Ocultar solucion B 
      this.solucionRespuestaC = true; // Ocultar solucion C
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 2 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 4 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 5 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 8 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false;
      this.solucionRespuestaB = true; // Ocultar solucion B 
      this.solucionRespuestaC = true; // Ocultar solucion C
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    }
  }

  verSolucion(ejercicio: Ejercicionivel1) {
    let idEjercicio = ejercicio.idejercicionivel1;
    if (idEjercicio == 1) { // mostrar respuesta correcta y cerrar solucion
      this.validarRespuesta = false;
      this.solucionRespuestaB = true; // Ocultar solucion respuesta B, C Y D
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 2) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion A, C, D
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 3) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion A, C, D
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
    } else if (idEjercicio == 4) {
      this.validarRespuesta = false;
      this.solucionRespuestaB = true; //Cocultar solucion 
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 5) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion 
      this.solucionRespuestaB = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 6) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion 
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
    } else if (idEjercicio == 7) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion 
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
    } else if (idEjercicio == 8) {
      this.validarRespuesta = false;
      this.solucionRespuestaB = true; // Ocultar solucion respuesta B, C Y D
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  getMatricula(): string {
    return this.loginService.getMatriculaToken();
  }
}