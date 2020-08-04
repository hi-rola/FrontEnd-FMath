import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  urlBackEnd: string;

  constructor(private http: HttpClient) { this.urlBackEnd = environment.backEndURL + '/ejercicio'; }

  getTodosEjerciciosUnion(): Observable<any> {
    return this.http.get(this.urlBackEnd + '/ejercicios/');
  }

  getTodosEjerciciosInterseccion(): Observable<any> {
    return this.http.get(this.urlBackEnd + '/ejercicios/interseccion/');
  }

  getTodosEjerciciosDiferencia(): Observable<any> {
    return this.http.get(this.urlBackEnd + '/ejercicios/diferencia/');
  }

  getEjerciciosPorTipo(tipo: String): Observable<any> {
    return this.http.get(this.urlBackEnd + '/ejercicios/' + tipo);
  }

  getEjerciciosPorTipoNivel1(tipo: String): Observable<any> {
    return this.http.get(this.urlBackEnd + '/ejerciciosNivel1/' + tipo);
  }

  getEjerciciosPorTipoNivel2(tipo: String): Observable<any> {
    return this.http.get(this.urlBackEnd + '/ejerciciosNivel2/' + tipo);
  }
}