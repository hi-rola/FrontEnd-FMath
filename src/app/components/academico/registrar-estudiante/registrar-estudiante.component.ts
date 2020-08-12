import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AcademicoService } from 'src/app/services/academico.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MsjResgistrarEstudianteComponent } from '../../mensajes-de-confirmacion/msj-resgistrar-estudiante/msj-resgistrar-estudiante.component';
import { Estudiante } from 'src/app/models/Estudiante';
import { EstudianteNumeropersonal } from 'src/app/models/EstudianteNumeropersonal';
import { MsjEstudianteExisteComponent } from '../../mensajes-de-confirmacion/msj-estudiante-existe/msj-estudiante-existe.component';
import { MsjEstudianteRegistradoComponent } from '../../mensajes-de-confirmacion/msj-estudiante-registrado/msj-estudiante-registrado.component';
import { MsjCancelarRegistroComponent } from '../../mensajes-de-confirmacion/msj-cancelar-registro/msj-cancelar-registro.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrarEstudianteComponent implements OnInit {

  alumnoForm: FormGroup;

  posicionVertical: MatSnackBarVerticalPosition = 'bottom';
  posicionHorizontal: MatSnackBarHorizontalPosition = 'left';
  tiempoSegundos = 10;
  mostrarLoader = false;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router, private servicioAC: AcademicoService,
    private spinnerService: NgxSpinnerService, private loginService: LoginService) {
    this.alumnoForm = this.createAlumnoForm();
  }

  ngOnInit() { }

  createAlumnoForm() {
    return new FormGroup({
      matricula: new FormControl('', [Validators.required, Validators.minLength(10)]),
      nombre: new FormControl('', Validators.required),
      correoInstitucional: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
      programaEducativo: new FormControl('', Validators.required),
      seccion: new FormControl('', Validators.required),
      bloque: new FormControl('', Validators.required),
      rol: new FormControl(''),
      numeroPersonal: new FormControl(''),
    });
  }

  guaradarAlumno() {
    if (this.alumnoForm.valid) {
      let loader = this.mostrarLoader = true;
      const dialogRef = this.dialog.open(MsjResgistrarEstudianteComponent, {
        width: '380px',
        panelClass: 'msj-registrar-estudiante',
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe(
        result => {
          if (result && loader) {
            this.spinnerService.show();
            let numeroPersonal = this.numeroPersonal();
            this.alumnoForm.get('rol').setValue('Estudiante');
            let estudiante: Estudiante = new Estudiante(
              this.alumnoForm.get('matricula').value,
              this.alumnoForm.get('nombre').value,
              this.alumnoForm.get('correoInstitucional').value,
              this.alumnoForm.get('contrasena').value,
              this.alumnoForm.get('programaEducativo').value,
              this.alumnoForm.get('seccion').value,
              this.alumnoForm.get('bloque').value,
              this.alumnoForm.get('rol').value
            );

            let estudianteNumeroPersonal: EstudianteNumeropersonal = new EstudianteNumeropersonal(estudiante, numeroPersonal);

            this.servicioAC.nuevoEstudiante(estudianteNumeroPersonal).subscribe(
              result => {
                if (result === null) {
                  this._snackBar.openFromComponent(MsjEstudianteExisteComponent, {
                    duration: this.tiempoSegundos * 400,
                    horizontalPosition: this.posicionHorizontal,
                    verticalPosition: this.posicionVertical,
                    panelClass: ['msj-estudiante-existe']
                  });
                  this.spinnerService.hide();
                } else {
                  this._snackBar.openFromComponent(MsjEstudianteRegistradoComponent, {
                    duration: this.tiempoSegundos * 400,
                    horizontalPosition: this.posicionHorizontal,
                    verticalPosition: this.posicionVertical,
                    panelClass: ['msj-estudiante-registrado']
                  });
                  this.spinnerService.hide();
                  let tipoUsuario = this.getTipoUsuario();
                  if(tipoUsuario === 'a'){
                    this.router.navigate(['/home-academico']);
                  }else if(tipoUsuario === 'd'){
                    this.router.navigate(['/home-administrador']);
                  }
                }
              },
              error => { console.log(error) }
            );
          } else {
            this.dialog.closeAll();
          }
        }
      )
    }
  }

  cancelar() {
    if (this.alumnoForm.get('matricula').value !== undefined && this.alumnoForm.get('matricula').value !== '' ||
      this.alumnoForm.get('nombre').value !== undefined && this.alumnoForm.get('nombre').value !== '' ||
      this.alumnoForm.get('contrasena').value !== undefined && this.alumnoForm.get('contrasena').value !== '' ||
      this.alumnoForm.get('programaEducativo').value !== undefined && this.alumnoForm.get('programaEducativo').value !== '' ||
      this.alumnoForm.get('seccion').value !== undefined && this.alumnoForm.get('seccion').value !== '') {
      const dialogRef = this.dialog.open(MsjCancelarRegistroComponent, {
        width: '380px',
        panelClass: 'msj-registrar-estudiante',
        autoFocus: false
      });
    } else {
      this.router.navigate(['/home-administrador']);
    }
  }

  numeroPersonal(): string {
    const cadena = localStorage.getItem('FMathTk');
    const numeropersonal = cadena.substring((cadena.indexOf('&') + 1), cadena.length);
    return numeropersonal;
  }

  volverInicio() {
    const tipoUsuario =  this.getTipoUsuario();
    if (this.alumnoForm.get('matricula').value !== undefined && this.alumnoForm.get('matricula').value !== '' ||
      this.alumnoForm.get('nombre').value !== undefined && this.alumnoForm.get('nombre').value !== '' ||
      this.alumnoForm.get('contrasena').value !== undefined && this.alumnoForm.get('contrasena').value !== '' ||
      this.alumnoForm.get('programaEducativo').value !== undefined && this.alumnoForm.get('programaEducativo').value !== '' ||
      this.alumnoForm.get('seccion').value !== undefined && this.alumnoForm.get('seccion').value !== '') {
      const dialogRef = this.dialog.open(MsjCancelarRegistroComponent, {
        width: '380px',
        panelClass: 'msj-registrar-estudiante',
        autoFocus: false
      });
    } else if(tipoUsuario === 'd'){
      this.router.navigate(['/home-administrador']);
    } else if(tipoUsuario === 'a'){
      this.router.navigate(['/home-academico']);
    }
  }

  getTipoUsuario(): string {
    const tipoUsuario = this.loginService.getTipoUsuario();
    return tipoUsuario;
  }
}