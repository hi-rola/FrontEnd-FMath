import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-msj-cancelar-registro',
  templateUrl: './msj-cancelar-registro.component.html',
  styleUrls: ['./msj-cancelar-registro.component.scss']
})
export class MsjCancelarRegistroComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<MsjCancelarRegistroComponent>) { }

  ngOnInit() { }

  cancelarSi() {
    this.router.navigate(['/home-administrador']);
    this.dialogRef.close();
  }

  cancelarNo() {
    this.dialogRef.close();
  }
}