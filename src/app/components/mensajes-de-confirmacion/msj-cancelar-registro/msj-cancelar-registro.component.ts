import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-msj-cancelar-registro',
  templateUrl: './msj-cancelar-registro.component.html',
  styleUrls: ['./msj-cancelar-registro.component.scss']
})
export class MsjCancelarRegistroComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<MsjCancelarRegistroComponent>,
    private loginService: LoginService) { }

  ngOnInit() { }

  cancelarSi() {
    const tipoUsuario = this.getTipoUsuario();
    if (tipoUsuario === 'a') {
      this.router.navigate(['/home-academico']);
      this.dialogRef.close();
    } else if (tipoUsuario === 'd') {
      this.router.navigate(['/home-administrador']);
      this.dialogRef.close();
    }
  }

  cancelarNo() {
    this.dialogRef.close();
  }

  getTipoUsuario(): string {
    const tipoUsuario = this.loginService.getTipoUsuario();
    return tipoUsuario;
  }
}