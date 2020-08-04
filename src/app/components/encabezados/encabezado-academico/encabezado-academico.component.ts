import { MatDialog } from '@angular/material';
import { Component, OnInit, Input} from '@angular/core';
import { LoginService } from './../../../services/login.service';
import { MenuComponent } from '../menu/menu/menu.component';

@Component({
  selector: 'app-encabezado-academico',
  templateUrl: './encabezado-academico.component.html',
  styleUrls: ['./encabezado-academico.component.scss']
})
export class EncabezadoAcademicoComponent implements OnInit {

  showFiller = false;
  @Input() error = false;
  nombreAcademico: string;


  constructor(private dialog: MatDialog, private login: LoginService) { }

  ngOnInit() {
    if (!this.error) {
      this.login.getAcademico(this.login.getNumeropersonalToken()).subscribe(
        result => {
          this.nombreAcademico = result.nombrecompleto;
        }
      );
    }
  }

  abrirMenu() {
    const dialogRef = this.dialog.open(MenuComponent, {
      width: '280px',
      position: { right: '7px', top: '75px' },
      panelClass: 'dialogSesion',
      autoFocus: false
    });
  }
}