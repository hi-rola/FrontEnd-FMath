import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MsjCancelarRegistroComponent } from '../../mensajes-de-confirmacion/msj-cancelar-registro/msj-cancelar-registro.component';
import { MsjEstudianteActualizadoComponent } from '../../mensajes-de-confirmacion/msj-estudiante-actualizado/msj-estudiante-actualizado.component';
import { Academico } from 'src/app/models/Academico';
import { MsjActualizarDatosComponent } from '../../mensajes-de-confirmacion/msj-actualizar-datos/msj-actualizar-datos.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatDialog, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { AdministradorService } from 'src/app/services/administrador.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-editar-academico',
  templateUrl: './editar-academico.component.html',
  styleUrls: ['./editar-academico.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditarAcademicoComponent implements OnInit {

  academicoForm: FormGroup;

  posicionHorizontal: MatSnackBarHorizontalPosition = 'left';
  posicionVertical: MatSnackBarVerticalPosition = 'bottom';
  tiempoSegundos = 10;

  mostrarLoader = false;

  constructor(private route: ActivatedRoute, private serviceAdmin: AdministradorService, public dialog: MatDialog,
    private _snackBar: MatSnackBar, private router: Router, private spinnerService: NgxSpinnerService) {
    this.academicoForm = this.createAcademicoForm();
  }

  ngOnInit() {
    let numeropersonal = this.route.snapshot.params['id'];
    this.serviceAdmin.getAcademico(numeropersonal).subscribe(
      result => {
        this.academicoForm.get('nombreCompleto').setValue(result.nombrecompleto);
        this.academicoForm.get('numeroPersonal').setValue(result.numeropersonal);
        this.academicoForm.get('usuario').setValue(result.usuario);
        this.academicoForm.get('contrasena').setValue(result.contrasena);
        this.academicoForm.get('correoInstitucional').setValue(result.correoinstitucional);
        this.academicoForm.get('periodoEscolar').setValue(result.periodoescolar);
        this.academicoForm.get('rol').setValue(result.rol);
      }
    );
  }

  createAcademicoForm() {
    return new FormGroup({
      numeroPersonal: new FormControl('', [Validators.required, Validators.minLength(5)]),
      nombreCompleto: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
      correoInstitucional: new FormControl('', [Validators.required, Validators.email]),
      periodoEscolar: new FormControl('', Validators.required),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
      estatus: new FormControl(''),
      rol: new FormControl('', Validators.required),
      estatus2: new FormControl('')
    });
  }

  editarAcademico() {
    if (this.academicoForm.valid) {
      let loader = this.mostrarLoader = true;
      const dialogRef = this.dialog.open(MsjActualizarDatosComponent, {
        width: '380px',
        panelClass: 'msj-registrar-estudiante',
        autoFocus: false
      });

      dialogRef.afterClosed().subscribe(
        result => {
          if (result && loader) {
            this.spinnerService.show();
            this.academicoForm.get('estatus').setValue('Activo');
            this.academicoForm.get('rol').setValue('Academico');
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
              this.academicoForm.get('estatus2').value
            );

            this.serviceAdmin.actualizarAcademico(academico).subscribe(
              result => {
                if (result != null) {
                  this._snackBar.openFromComponent(MsjEstudianteActualizadoComponent, {
                    duration: this.tiempoSegundos * 400,
                    horizontalPosition: this.posicionHorizontal,
                    verticalPosition: this.posicionVertical,
                    panelClass: ['msj-estudiante-actualizado']
                  });
                  this.spinnerService.hide();
                  this.router.navigate(['/academicos-registrados']);
                }
              }
            );
          }
        }
      );
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