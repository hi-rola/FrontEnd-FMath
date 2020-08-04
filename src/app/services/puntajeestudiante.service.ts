import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PuntajeEjercicio } from '../models/PuntajeEjercicio';

@Injectable({
  providedIn: 'root'
})
export class PuntajeestudianteService {

  urlBackEnd: string;

  constructor(private http: HttpClient) { this.urlBackEnd = environment.backEndURL + '/puntaje'; }

  getPuntaje(matricula: string): Observable<any> {
    return this.http.get(this.urlBackEnd + '/puntajes/' + matricula);
  }

  resgistrarPuntaje(puntajeEstudiante: PuntajeEjercicio): Observable<any> {
    return this.http.post(this.urlBackEnd + '/puntajes/', puntajeEstudiante);
  }
}