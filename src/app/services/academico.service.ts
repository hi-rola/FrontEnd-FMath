import { EstudianteNumeropersonal } from './../models/EstudianteNumeropersonal';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from './../models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class AcademicoService {
  getTodosEstudiantesPor() {
    throw new Error("Method not implemented.");
  } 
  ///verificar

  urlBackEnd: string;

  constructor(private http: HttpClient) { this.urlBackEnd = environment.backEndURL; }

  getTodosEstudiantes(): Observable<any> {
    return this.http.get(this.urlBackEnd + '/estudiantes');
  }

  nuevoEstudiante(estudianteNumeroPersonal: EstudianteNumeropersonal): Observable<any> {
    return this.http.post(this.urlBackEnd + '/estudiantes/', estudianteNumeroPersonal);
  }

  actualizarEstudiante(estudiante: Estudiante): Observable<any> {
    return this.http.put(this.urlBackEnd + '/estudiantes/' + estudiante.matricula, estudiante);
  }

  deleteEstudiante(estudiante: Estudiante): Observable<any> {
    return this.http.delete(this.urlBackEnd + '/estudiantes/' + estudiante.matricula);
  }
}
