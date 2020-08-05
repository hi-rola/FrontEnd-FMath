import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-msj-evaluacion-n1',
  templateUrl: './msj-evaluacion-n1.component.html',
  styleUrls: ['./msj-evaluacion-n1.component.scss']
})
export class MsjEvaluacionN1Component implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  cerrarMensaje(){
    this.dialog.closeAll();
  }

}