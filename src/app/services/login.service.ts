import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from './../models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlBackEnd: string;

  constructor(private http: HttpClient) { this.urlBackEnd = environment.backEndURL; }

  getAccesoEstudiante(usuario: string, password: string): Observable<any> {
    const datos = [usuario, password];
    return this.http.post(this.urlBackEnd + '/loginEstudiante', datos);
  }

  getAccesoAcademico(usuario: string, password: string): Observable<any> {
    const datosac = [usuario, password];
    return this.http.post(this.urlBackEnd + '/loginAcademico', datosac)
  }

  getMatriculaToken(): string {
    const cadena = localStorage.getItem('FMathTk');
    const matricula = cadena.substring((cadena.indexOf('&') + 1), cadena.length);
    return matricula;
  }

  getNumeropersonalToken(): string {
    const cadena = localStorage.getItem('FMathTk');
    const numeropersonal = cadena.substring((cadena.indexOf('&') + 1), cadena.length);
    return numeropersonal;
  }

  getEstudiante(matricula: string): Observable<any> {
    return this.http.get(this.urlBackEnd + '/estudiantes/' + matricula);
  }

  getAcademico(usuario: string): Observable<any> {
    return this.http.get(this.urlBackEnd + '/academicos/' + usuario);
  }

  getTipoUsuario(): string {
    const cadena = localStorage.getItem('FMathTk');
    const tipoUsuario = cadena.charAt(0);
    return tipoUsuario;
  }
}
