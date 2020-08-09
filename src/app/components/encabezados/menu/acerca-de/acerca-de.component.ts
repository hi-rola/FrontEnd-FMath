import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AcercaDeComponent implements OnInit {

  mostrarAcademico = false;
  mostrarEstudiante = true;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    let data = this.loginService.getNumeropersonalToken();
    if(data.charAt(0) != 'z'){
      this.mostrarAcademico = true
      this.mostrarEstudiante = false;
    }
  }

  volver(){
    const tipoUsuario = this.getTipoUsuario();
    if(tipoUsuario == 'e'){
      this.router.navigate(['/home-estudiante']);
    }else if(tipoUsuario == 'a'){
      this.router.navigate(['/home-academico']);
    } else if(tipoUsuario == 'd'){
      this.router.navigate(['/home-administrador']);
    }
  }

  getTipoUsuario(): string {
    const tipoUsuario = this.loginService.getTipoUsuario();
    return tipoUsuario;
  }

}