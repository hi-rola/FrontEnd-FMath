import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AcercaDeComponent implements OnInit {

  mostrarAcademico = false;
  mostrarEstudiante = true;

  constructor(private serviceLogin: LoginService) { }

  ngOnInit() {
    let data = this.serviceLogin.getNumeropersonalToken();
    if(data.charAt(0) != 'z'){
      this.mostrarAcademico = true
      this.mostrarEstudiante = false;
    }
  }

  volver(){
    
  }

}