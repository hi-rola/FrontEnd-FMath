import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msj-interseccion-n2-finalizado',
  templateUrl: './msj-interseccion-n2-finalizado.component.html',
  styleUrls: ['./msj-interseccion-n2-finalizado.component.scss']
})
export class MsjInterseccionN2FinalizadoComponent implements OnInit {

  constructor(private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  volverInicio() {
    this.route.navigate(['/home-estudiante']);
    this.dialog.closeAll();
  }

}