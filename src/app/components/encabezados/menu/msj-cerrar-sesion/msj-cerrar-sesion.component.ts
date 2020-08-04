import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msj-cerrar-sesion',
  templateUrl: './msj-cerrar-sesion.component.html',
  styleUrls: ['./msj-cerrar-sesion.component.scss']
})
export class MsjCerrarSesionComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  cerrarSesion() {
    localStorage.removeItem('FMathTk');
    this.router.navigate(['/']);
    this.dialog.closeAll();
  }

  cancelarCerrarSesion() {
    this.dialog.closeAll();
  }
}