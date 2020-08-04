import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MsjCancelarRegistroComponent } from '../../mensajes-de-confirmacion/msj-cancelar-registro/msj-cancelar-registro.component';
import { MsjExisteAcademicoComponent } from '../../mensajes-de-confirmacion/msj-existe-academico/msj-existe-academico.component';
import { MsjAcademicoRegistradoComponent } from '../../mensajes-de-confirmacion/msj-academico-registrado/msj-academico-registrado.component';
import { Academico } from 'src/app/models/Academico';
import { MsjRegistrarAcademicoComponent } from '../../mensajes-de-confirmacion/msj-registrar-academico/msj-registrar-academico.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AdministradorService } from 'src/app/services/administrador.service';
import { MatDialog, MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-academico',
  templateUrl: './registrar-academico.component.html',
  styleUrls: ['./registrar-academico.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrarAcademicoComponent implements OnInit {

  academicoForm: FormGroup;

  posicionHorizontal: MatSnackBarHorizontalPosition = 'left';
  posicionVertical: MatSnackBarVerticalPosition = 'bottom';
  tiempoSegundos = 5;

  mostrarLoader = false;

  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router,
    private serviceAdmin: AdministradorService, private spinnerService: NgxSpinnerService) {
    this.academicoForm = this.createAcademicoForm();
  }

  ngOnInit() { }

  createAcademicoForm() {
    return new FormGroup({
      numeroPersonal: new FormControl('', [Validators.required, Validators.maxLength(5)]),
      nombreCompleto: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
      correoInstitucional: new FormControl('', [Validators.required, Validators.email]),
      periodoEscolar: new FormControl('', Validators.required),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
      estatus: new FormControl(''),
      rol: new FormControl(''),
      estatus2: new FormControl('')
    });
  }

  registrarAcademico() {
    if (this.academicoForm.valid) {
      let loader = this.mostrarLoader = true;
      const dialogRef = this.dialog.open(MsjRegistrarAcademicoComponent, {
        width: '380px',
        panelClass: 'msj-registrar-academico',
        autoFocus: false
      });

      dialogRef.beforeClose().subscribe(
        result => {
          if (result && loader) {
            this.spinnerService.show();
            this.academicoForm.get('estatus').setValue('Activo');
            this.academicoForm.get('rol').setValue('Academico');
            const variableEstatus2 = 'true';
            let variable: boolean;
            variable = !!variableEstatus2;
            this.academicoForm.get('estatus2').setValue('true');
            let academico: Academico = new Academico(
              this.academicoForm.get('numeroPersonal').value,
              this.academicoForm.get('usuario').value,
              this.academicoForm.get('nombreCompleto').value,
              this.academicoForm.get('correoInstitucional').value,
              this.academicoForm.get('periodoEscolar').value,
              this.academicoForm.get('contrasena').value,
              this.academicoForm.get('estatus').value,
              this.academicoForm.get('rol').value,
              variable
            );

            this.serviceAdmin.registrarAcademico(academico).subscribe(
              result => {
                if (result != null) {
                  this._snackBar.openFromComponent(MsjAcademicoRegistradoComponent, {
                    duration: this.tiempoSegundos * 400,
                    horizontalPosition: this.posicionHorizontal,
                    verticalPosition: this.posicionVertical,
                    panelClass: ['msj-academico-registrado']
                  });

                  this.spinnerService.hide();
                  this.router.navigate(['/academicos-registrados']);
                  
                } else {
                  this._snackBar.openFromComponent(MsjExisteAcademicoComponent, {
                    duration: this.tiempoSegundos * 400,
                    horizontalPosition: this.posicionHorizontal,
                    verticalPosition: this.posicionVertical,
                    panelClass: ['msj-academico-existe']
                  });
                  this.spinnerService.hide();
                }
              }
            );
          } else {
            this.dialog.closeAll();
          }
        }
      )
    }
  }

  cancelar() {
    if (this.academicoForm.get('numeroPersonal').value !== undefined && this.academicoForm.get('numeroPersonal').value !== ''
      || this.academicoForm.get('nombreCompleto').value !== undefined && this.academicoForm.get('nombreCompleto').value !== ''
      || this.academicoForm.get('usuario').value !== undefined && this.academicoForm.get('usuario').value !== ''
      || this.academicoForm.get('correoInstitucional').value !== undefined && this.academicoForm.get('correoInstitucional').value !== ''
      || this.academicoForm.get('contrasena').value !== undefined && this.academicoForm.get('contrasena').value !== '') {
      const dialogRef = this.dialog.open(MsjCancelarRegistroComponent, {
        width: '380px',
        panelClass: 'msj-registrar-estudiante',
        autoFocus: false
      });
    } else {
      this.router.navigate(['/academicos-registrados']);
    }
  }

  volverInicio() {
    if (this.academicoForm.get('numeroPersonal').value !== undefined && this.academicoForm.get('numeroPersonal').value !== ''
      || this.academicoForm.get('nombreCompleto').value !== undefined && this.academicoForm.get('nombreCompleto').value !== ''
      || this.academicoForm.get('usuario').value !== undefined && this.academicoForm.get('usuario').value !== ''
      || this.academicoForm.get('correoInstitucional').value !== undefined && this.academicoForm.get('correoInstitucional').value !== ''
      || this.academicoForm.get('contrasena').value !== undefined && this.academicoForm.get('contrasena').value !== '') {
      const dialogRef = this.dialog.open(MsjCancelarRegistroComponent, {
        width: '380px',
        panelClass: 'msj-registrar-estudiante',
        autoFocus: false
      });
    } else {
      this.router.navigate(['/academicos-registrados']);
    }
  }
}