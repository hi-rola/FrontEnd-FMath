import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MsjEstudianteEliminadoComponent } from '../../mensajes-de-confirmacion/msj-estudiante-eliminado/msj-estudiante-eliminado.component';
import { MsjEliminarEstudianteComponent } from '../../mensajes-de-confirmacion/msj-eliminar-estudiante/msj-eliminar-estudiante.component';
import { Estudiante } from 'src/app/models/Estudiante';
import { MatTableDataSource, MatDialog, MatSnackBar, MatSort, MatPaginator, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { AcademicoService } from 'src/app/services/academico.service';
import { LoginService } from 'src/app/services/login.service';
import { AdministradorService } from 'src/app/services/administrador.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-estudiantes-registrados',
  templateUrl: './estudiantes-registrados.component.html',
  styleUrls: ['./estudiantes-registrados.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EstudiantesRegistradosComponent implements OnInit {

  estudiantes: Estudiante[];
  dataSource = null;
  mensaje: string;

  posicionVertical: MatSnackBarVerticalPosition = 'bottom';
  posicionHorizontal: MatSnackBarHorizontalPosition = 'left';
  tiempoSegundos = 10;
  ocultarMensaje = true;


  displayedColumns: string[] = ['matricula', 'nombrecompleto', 'programaeducativo', 'seccion', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private servicioAC: AcademicoService, private router: Router, public dialog: MatDialog, private _snackBar: MatSnackBar,
    private login: LoginService, private admin: AdministradorService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.mostrarEstudiantes();
  }

  mostrarEstudiantes() {
    this.spinnerService.show();
    this.admin.getEstudiantePorAcademico(this.login.getNumeropersonalToken()).subscribe(
      result => {
        this.estudiantes = result;
        if(this.estudiantes.length === 0){
          this.ocultarMensaje = false;
          this.spinnerService.hide();
        }else if(this.estudiantes.length > 0){
          this.estudiantes = result;
          this.dataSource = new MatTableDataSource<Estudiante>(this.estudiantes);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator._intl.itemsPerPageLabel = "Usuarios por página";
          this.dataSource.paginator._intl.nextPageLabel = "Siguiente";
          this.dataSource.paginator._intl.previousPageLabel = "Anterior";
          this.dataSource.paginator._intl.firstPageLabel = "Inicio";
          this.dataSource.paginator._intl.lastPageLabel = "Última página";
          this.ocultarMensaje = true;
          this.spinnerService.hide();
        }
      }
    );
  }

  editarEstudiante(estudiante: Estudiante) {
    this.router.navigate(['/home-academico/actualizar-inf-estudiante', estudiante.matricula]);
  }

  eliminarEstudiante(estudiante: Estudiante) {
    const dialogRef = this.dialog.open(MsjEliminarEstudianteComponent, {
      width: '380px',
      panelClass: 'msj-registrar-estudiante',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.servicioAC.deleteEstudiante(estudiante).subscribe(
            result => {
              if (result) {
                this.estudiantes = this.estudiantes.filter(borrarEstudiante => borrarEstudiante !== estudiante);
                this.mostrarEstudiantes();
                this._snackBar.openFromComponent(MsjEstudianteEliminadoComponent, {
                  duration: this.tiempoSegundos * 400,
                  horizontalPosition: this.posicionHorizontal,
                  verticalPosition: this.posicionVertical,
                  panelClass: ['msj-estudiante-eliminado']
                });
              } else {
                this.dialog.closeAll();
              }
            }
          );
        }
      }
    );
  }

  filtrarAlumno(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}