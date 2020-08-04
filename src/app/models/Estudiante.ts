import { Academico } from './Academico';
export class Estudiante {
    constructor(
        public matricula: string,
        public nombrecompleto: string,
        public correoinstitucional: string,
        public contrasena: string,
        public programaeducativo: string,
        public seccion: string,
        public bloque: string,
        public rol: string,
        public numeropersonal?: Academico
    ) { }
}