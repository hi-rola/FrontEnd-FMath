import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-msj-complemento-n2-finalizado',
  templateUrl: './msj-complemento-n2-finalizado.component.html',
  styleUrls: ['./msj-complemento-n2-finalizado.component.scss']
})
export class MsjComplementoN2FinalizadoComponent implements OnInit {

  constructor(private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  volverInicio() {
    this.route.navigate(['/home-estudiante']);
    this.dialog.closeAll();
  }

}