import { Estudiante } from './Estudiante';
export class Puntajeestudiante {
    constructor(
        public idpuntaje: number,
        public puntaje: number,
        public tipoejercicio: string,
        public matricula?: Estudiante
    ) { }
}