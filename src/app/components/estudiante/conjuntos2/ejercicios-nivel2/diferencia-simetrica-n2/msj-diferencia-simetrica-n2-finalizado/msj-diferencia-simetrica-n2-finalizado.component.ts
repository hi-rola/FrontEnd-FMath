import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-msj-diferencia-simetrica-n2-finalizado',
  templateUrl: './msj-diferencia-simetrica-n2-finalizado.component.html',
  styleUrls: ['./msj-diferencia-simetrica-n2-finalizado.component.scss']
})
export class MsjDiferenciaSimetricaN2FinalizadoComponent implements OnInit {

  constructor(private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  volverInicio() {
    this.route.navigate(['/home-estudiante']);
    this.dialog.closeAll();
  }
}