import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorhttpService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('FMathTk') == null) {
      localStorage.removeItem('FMathTk');
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ')
          .set('Content-Type', 'application/json;charset=utf-8'), withCredentials: true
      });
    } else {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.obtenerToken(localStorage.getItem('FMathTk')))
          .set('Content-Type', 'application/json;charset=utf-8'), withCredentials: true
      });
    }
    return next.handle(request);
  }

  private obtenerToken(cadena: string) {
    const token = cadena.substring(1, cadena.indexOf('&'));
    return token;
  }
}
