import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ejercicionivel2 } from 'src/app/models/Ejercicionivel2';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import { MsjUnionN2FinalizadoComponent } from './msj-union-n2-finalizado/msj-union-n2-finalizado.component';
import { PuntajeEjercicio } from 'src/app/models/PuntajeEjercicio';
import { LoginService } from 'src/app/services/login.service';
import { EjerciciosService } from 'src/app/services/ejercicios.service';
import { PuntajeestudianteService } from 'src/app/services/puntajeestudiante.service';

@Component({
  selector: 'app-union-n2',
  templateUrl: './union-n2.component.html',
  styleUrls: ['./union-n2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnionN2Component implements OnInit {

  listEjercicioUno: Ejercicionivel2[] = [];
  listEjercicioDos: Ejercicionivel2[] = [];
  listEjercicioTres: Ejercicionivel2[] = [];
  listEjercicioCuatro: Ejercicionivel2[] = [];
  listEjercicioCinco: Ejercicionivel2[] = [];
  listEjercicioSeis: Ejercicionivel2[] = [];
  listEjercicioSiete: Ejercicionivel2[] = [];
  listEjercicioOcho: Ejercicionivel2[] = [];

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
  respuestaUsuario: string;
  ingresarRespuesta = true;

  constructor(private serviceEjercicio: EjerciciosService, private SpinnerService: NgxSpinnerService,
    public dialog: MatDialog, private puntajeEstudianteService: PuntajeestudianteService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.getTodosEjercicicosUnion2();
  }

  getTodosEjercicicosUnion2() {
    this.SpinnerService.show();
    let UnionDos = 'Unión 2'
    this.serviceEjercicio.getEjerciciosPorTipoNivel2(UnionDos).subscribe(
      result => {
        this.listEjercicioUno.push(result[0]);
        this.listEjercicioDos.push(result[1]);
        this.listEjercicioTres.push(result[2]);
        this.listEjercicioCuatro.push(result[3]);
        this.listEjercicioCinco.push(result[4]);
        this.listEjercicioSeis.push(result[5]);
        this.listEjercicioSiete.push(result[6]);
        this.listEjercicioOcho.push(result[7]);
        this.SpinnerService.hide();
      }
    );
  }

  respuestaA(ejercicio: Ejercicionivel2) {
    this.validarRespuestasA(ejercicio);
  }

  respuestaB(ejercicio: Ejercicionivel2) {
    this.validarRespuestasB(ejercicio);
  }

  respuestaC(ejercicio: Ejercicionivel2) {
    this.validarRespuestasC(ejercicio);
  }

  respuestaD(ejercicio: Ejercicionivel2) {
    this.validarRespuestasD(ejercicio);
  }

  validarRespuestasA(ejercicio: Ejercicionivel2) {
    let respuestaA = ejercicio.respuestaa;
    let idEjercicio = ejercicio.idejercicionivel2;
    if (respuestaA == ejercicio.respuestacorrecta) {
      if (idEjercicio == 2) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta3 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta2 = false;
        this.mostrarIcono2 = false;
        this.solucionRespuestaB = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      } else if (idEjercicio == 7) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta8 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta7 = false;
        this.mostrarIcono7 = false;
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

        let tipo = 'Union-2';
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

        const dialogRef = this.dialog.open(MsjUnionN2FinalizadoComponent, {
          width: '450px',
          panelClass: 'msj-nivel-finalizado',
          autoFocus: false
        });
      }
    } else if (idEjercicio == 1 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.ingresarRespuesta = true;
      this.respuestaUsuario = '';
    } else if (idEjercicio == 3 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 4 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.ingresarRespuesta = true;
      this.respuestaUsuario = '';
    } else if (idEjercicio == 5 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 6 && respuestaA != ejercicio.respuestacorrecta) {
      this.solucionRespuestaA = false; // Mostrar solución
      this.solucionRespuestaB = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    }
  }

  validarRespuestasB(ejercicio: Ejercicionivel2) {
    let respuestaB = ejercicio.respuestab;
    let idEjercicio = ejercicio.idejercicionivel2;
    if (respuestaB == ejercicio.respuestacorrecta) {
      if (idEjercicio == 3) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta4 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta3 = false;
        this.mostrarIcono3 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      }
    } else if (idEjercicio == 1 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.ingresarRespuesta = true;
      this.respuestaUsuario = '';
    } else if (idEjercicio == 2 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaC = true; // Ocultar solucion respuesta C
      this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 4 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.ingresarRespuesta = true;
      this.respuestaUsuario = '';
    } else if (idEjercicio == 5 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 6 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 7 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaC = true; // Ocultar solucion respuesta C
      this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 8 && respuestaB != ejercicio.respuestacorrecta) {
      this.solucionRespuestaB = false; // Mostrar solución
      this.solucionRespuestaC = true; // Ocultar solucion respuesta C
      this.solucionRespuestaD = true; // Ocultar solucion respuesta D
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    }
  }

  validarRespuestasC(ejercicio: Ejercicionivel2) {
    let respuestaC = ejercicio.respuestac;
    let idEjercicio = ejercicio.idejercicionivel2;
    if (idEjercicio == 6) {
      this.validarRespuesta = true;
      this.habilitarExpansionPanelPregeunta7 = true;
      this.nextStep();
      this.habilitarExpansionPanelPregeunta6 = false;
      this.mostrarIcono6 = false;
      this.solucionRespuestaA = true; // Ocultar solucion respuesta B
      this.solucionRespuestaB = true; // Ocultar solucion respuesta C
      this.solucionRespuestaD = true; // Ocultar solucion respuesta D  
    } else if (idEjercicio == 1 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.ingresarRespuesta = true;
      this.respuestaUsuario = '';
    } else if (idEjercicio == 2 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false;
      this.solucionRespuestaB = true; // ocultar solucion B 
      this.solucionRespuestaD = true; // ocultar solucion C
      this.validarRespuesta = true;  // ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 3 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 4 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.solucionRespuestaD = true;
      this.validarRespuesta = true;
      this.ingresarRespuesta = true;
      this.respuestaUsuario = '';
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 5 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 7 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false;
      this.solucionRespuestaB = true; // ocultar solucion B 
      this.solucionRespuestaD = true; // ocultar solucion C
      this.validarRespuesta = true;  // ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 8 && respuestaC != ejercicio.respuestacorrecta) {
      this.solucionRespuestaC = false;
      this.solucionRespuestaB = true; // ocultar solucion B 
      this.solucionRespuestaD = true; // ocultar solucion C
      this.validarRespuesta = true;  // ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    }
  }

  validarRespuestasD(ejercicio: Ejercicionivel2) {
    let respuestaD = ejercicio.respuestad;
    let idEjercicio = ejercicio.idejercicionivel2;
    if (respuestaD == ejercicio.respuestacorrecta) {
      if (idEjercicio == 5) {
        this.validarRespuesta = true;
        this.habilitarExpansionPanelPregeunta6 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta5 = false;
        this.mostrarIcono5 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta B
        this.solucionRespuestaB = true; // Ocultar solucion respuesta C
        this.solucionRespuestaC = true; // Ocultar solucion respuesta D
      }
    } else if (idEjercicio == 1 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.ingresarRespuesta = true;
      this.respuestaUsuario = '';
    } else if (idEjercicio == 2 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false;
      this.solucionRespuestaB = true; // Ocultar solucion B 
      this.solucionRespuestaC = true; // Ocultar solucion C
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 3 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 4 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.validarRespuesta = true;
      this.ingresarRespuesta = true;
      this.respuestaUsuario = '';
    } else if (idEjercicio == 6 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false; // Mostrar solución
      this.solucionRespuestaA = true;
      this.solucionRespuestaB = true;
      this.validarRespuesta = true;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 7 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false;
      this.solucionRespuestaB = true; // Ocultar solucion B 
      this.solucionRespuestaC = true; // Ocultar solucion C
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    } else if (idEjercicio == 8 && respuestaD != ejercicio.respuestacorrecta) {
      this.solucionRespuestaD = false;
      this.solucionRespuestaB = true; // Ocultar solucion B 
      this.solucionRespuestaC = true; // Ocultar solucion C
      this.validarRespuesta = true;  // Ocultar respuesta correcta
      this.respuestaCorrecta = ejercicio.respuestacorrecta;
    }
  }

  validarRespuestaUsuario(ejercicio: Ejercicionivel2) {
    let respuestaCorrecta = ejercicio.respuestacorrecta;
    let idEjercicio = ejercicio.idejercicionivel2;
    if (this.respuestaUsuario == respuestaCorrecta) {
      if (idEjercicio == 1) {
        this.validarRespuesta = true;
        this.ingresarRespuesta = true;
        this.respuestaUsuario = '';
        this.habilitarExpansionPanelPregeunta2 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta1 = false;
        this.mostrarIcono1 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta A
        this.solucionRespuestaB = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaC = true; // Ocultar solucion respuesta D
      } else if (idEjercicio == 4) {
        this.validarRespuesta = true;
        this.ingresarRespuesta = true;
        this.respuestaUsuario = '';
        this.habilitarExpansionPanelPregeunta5 = true;
        this.nextStep();
        this.habilitarExpansionPanelPregeunta4 = false;
        this.mostrarIcono4 = false;
        this.solucionRespuestaA = true; // Ocultar solucion respuesta A
        this.solucionRespuestaB = true; // Ocultar solucion respuesta B
        this.solucionRespuestaC = true; // Ocultar solucion respuesta C
        this.solucionRespuestaC = true; // Ocultar solucion respuesta D
      }
    } else if (idEjercicio == 1 && this.respuestaUsuario != respuestaCorrecta) {
      this.validarRespuesta = false;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    } else if (idEjercicio == 4 && this.respuestaUsuario != respuestaCorrecta) {
      this.validarRespuesta = false;
      this.respuestaCorrecta = ejercicio.respuestacorrecta; // mostrar respuesta correcta
    }
  }

  verSolucion(ejercicio: Ejercicionivel2) {
    let idEjercicio = ejercicio.idejercicionivel2;
    if (idEjercicio == 1) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion A, C, D
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
    } else if (idEjercicio == 2) { // mostrar respuesta correcta y cerrar solucion
      this.validarRespuesta = false;
      this.solucionRespuestaB = true; // Ocultar solucion respuesta B, C Y D
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 3) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion A, C, D
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 4) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion A, C, D
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
    } else if (idEjercicio == 5) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion A, C, D
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
    } else if (idEjercicio == 6) {
      this.validarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion 
      this.solucionRespuestaB = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 7) { // mostrar respuesta correcta y cerrar solucion
      this.validarRespuesta = false;
      this.solucionRespuestaB = true; // Ocultar solucion respuesta B, C Y D
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 8) { // mostrar respuesta correcta y cerrar solucion
      this.validarRespuesta = false;
      this.solucionRespuestaB = true; // Ocultar solucion respuesta B, C Y D
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    }
  }

  mostrarIngresarRespuesta(ejercicio: Ejercicionivel2) {
    let idEjercicio = ejercicio.idejercicionivel2;
    if (idEjercicio == 1) {
      this.ingresarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion 
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
      this.solucionRespuestaD = true;
    } else if (idEjercicio == 4) {
      this.ingresarRespuesta = false;
      this.solucionRespuestaA = true; //Cocultar solucion 
      this.solucionRespuestaB = true;
      this.solucionRespuestaC = true;
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