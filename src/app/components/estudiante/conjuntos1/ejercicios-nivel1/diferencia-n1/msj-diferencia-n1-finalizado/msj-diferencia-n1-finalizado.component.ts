import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-msj-diferencia-n1-finalizado',
  templateUrl: './msj-diferencia-n1-finalizado.component.html',
  styleUrls: ['./msj-diferencia-n1-finalizado.component.scss']
})
export class MsjDiferenciaN1FinalizadoComponent implements OnInit {

  constructor(private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  volverInicio() {
    this.route.navigate(['/home-estudiante']);
    this.dialog.closeAll();
  }

}