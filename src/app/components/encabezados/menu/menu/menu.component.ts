import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MsjCerrarSesionComponent } from '../msj-cerrar-sesion/msj-cerrar-sesion.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  nombreUsuario: string;
  correoUsuario: string;

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<MenuComponent>, private router: Router,
    private login: LoginService) { }

  ngOnInit() {
    const cadena = localStorage.getItem('FMathTk');
    let validarUsuario = cadena.charAt(0);
    if (validarUsuario === 'a') {
      this.login.getAcademico(this.login.getNumeropersonalToken()).subscribe(
        result => {
          this.nombreUsuario = result.nombrecompleto;
          this.correoUsuario = result.correoinstitucional;
        }
      );
    } else if (validarUsuario == 'e') {
      this.login.getEstudiante(this.login.getMatriculaToken()).subscribe(
        result => {
          this.nombreUsuario = result.nombrecompleto;
          this.correoUsuario = result.correoinstitucional;
        }
      );
    }
  }

  cerrarSesion() {
    const dialogRef = this.dialog.open(MsjCerrarSesionComponent, {
      width: '380px',
      panelClass: 'dialogCancelar',
      autoFocus: false
    });
    this.dialogRef.close();
  }

  mostrarAcercade() {
    this.router.navigate(['/acerca-de']);
    this.dialogRef.close();
  }

}