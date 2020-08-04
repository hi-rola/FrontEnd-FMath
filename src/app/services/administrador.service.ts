import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Academico } from '../models/Academico';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  urlBackEnd: string;

  constructor(private http: HttpClient) { this.urlBackEnd = environment.backEndURL + '/academico'; }

  getAcademico(numeroPersonal: string): Observable<any> {
    return this.http.get(this.urlBackEnd + '/academicos/' + numeroPersonal);
  }

  getEstudiantePorAcademico(numeropersonal: string): Observable<any> {
    return this.http.get(this.urlBackEnd + '/estudiantes/' + numeropersonal);
  }

  getTodosAcademicos(): Observable<any> {
    return this.http.get(this.urlBackEnd + '/academicos');
  }

  registrarAcademico(academico: Academico): Observable<any> {
    return this.http.post(this.urlBackEnd + '/academicos/', academico);
  }

  actualizarAcademico(academico: Academico): Observable<any> {
    return this.http.put(this.urlBackEnd + '/academicos/' + academico.numeropersonal, academico);
  }

  eliminarAcademico(academico: Academico): Observable<any> {
    return this.http.delete(this.urlBackEnd + '/academicos/' + academico.numeropersonal);
  }
}