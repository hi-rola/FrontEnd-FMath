import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaAcademicoService implements CanActivate {

  constructor(private router: Router, private login: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('FMathTk');
    if (token == null) {
      this.router.navigate(['401']);
      return false;
    } else {
      if (token.charAt(0) == 'a' || token.charAt(0) == 'd') {
        return true;
      } else {
        this.router.navigate(['401']);
        return false;
      }
    }
  }
}