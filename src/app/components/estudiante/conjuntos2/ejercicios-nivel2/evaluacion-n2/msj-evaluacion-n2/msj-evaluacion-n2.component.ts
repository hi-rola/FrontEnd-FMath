import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-msj-evaluacion-n2',
  templateUrl: './msj-evaluacion-n2.component.html',
  styleUrls: ['./msj-evaluacion-n2.component.scss']
})
export class MsjEvaluacionN2Component implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  cerrarMensaje() {
    this.dialog.closeAll();
  }
}