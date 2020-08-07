import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Academico } from 'src/app/models/Academico';
import { MatTableDataSource, MatDialog, MatSnackBar, MatPaginator, MatSort } from '@angular/material';
import { MsjCambiarEstatusComponent } from '../../mensajes-de-confirmacion/msj-cambiar-estatus/msj-cambiar-estatus.component';
import { AdministradorService } from 'src/app/services/administrador.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AcademicoService } from 'src/app/services/academico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academicos-registrados',
  templateUrl: './academicos-registrados.component.html',
  styleUrls: ['./academicos-registrados.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AcademicosRegistradosComponent implements OnInit {

  listAcademicos: Academico[];
  dataSource = null;
  ocultarMensaje = true;

  displayedColumns: string[] = ['numeropersonal', 'nombrecompleto', 'correoinstitucional', 'estatus', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private servicioAC: AcademicoService, private router: Router, public dialog: MatDialog, private _snackBar: MatSnackBar,
    private serviceAdmin: AdministradorService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.mostrarAcademicos();
  }

  editarAcademico(academico: Academico) {
    this.router.navigate(['/actualizar-informacion-academico', academico.numeropersonal]);
  }

  cambiarEstatus(academico: Academico) {
    const dialogRef = this.dialog.open(MsjCambiarEstatusComponent, {
      width: '380px',
      panelClass: 'msj-registrar-estudiante',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          let personal = academico.numeropersonal;
          let usuario = academico.usuario;
          let nombre = academico.nombrecompleto;
          let correo = academico.correoinstitucional;
          let periodo = academico.periodoescolar;
          let contrasena2 = academico.contrasena;
          let rolac = academico.rol;

          let estatus = this.devolverEstatus(academico);
          let estatus2 = this.devolverEstatus2(academico);
          const variebleEstatus1 = 'false';
          const variebleEstatus2 = 'true';
          let dat: boolean;

          if (estatus == 'Activo' && estatus2 == true) {
            estatus = 'Inactivo'
            dat = !variebleEstatus1
          } else if (estatus == 'Inactivo' && estatus2 == false) {
            estatus = 'Activo';
            dat = !!variebleEstatus2;
          }

          let nuevoAc = new Academico(personal, usuario, nombre, correo, periodo, contrasena2, estatus, rolac, dat);

          this.serviceAdmin.actualizarAcademico(nuevoAc).subscribe(
            result => {
              this.mostrarAcademicos();
            }
          );
        } else {
          this.dialog.closeAll();
          this.mostrarAcademicos();
        }
      }
    );
  }

  mostrarAcademicos() {
    this.spinnerService.show();
    this.serviceAdmin.getTodosAcademicos().subscribe(
      result => {
        this.listAcademicos = result;
        if (this.listAcademicos.length === 0) {
          this.ocultarMensaje = false;
          this.spinnerService.hide();
        } else if (this.listAcademicos.length > 0) {
          this.listAcademicos = result;
          this.dataSource = new MatTableDataSource<Academico>(this.listAcademicos);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.spinnerService.hide();
        }
      }
    );
  }

  filtrarAlumno(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  devolverEstatus(academico: Academico): string {
    return academico.estatus;
  }

  devolverEstatus2(academico: Academico): boolean {
    return academico.estatus2;
  }

}